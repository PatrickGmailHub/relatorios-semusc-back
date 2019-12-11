import jwt from 'jsonwebtoken';
import 'dotenv/config';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { login, password } = req.body;

    const user = await User.findOne({
      where: { login },
    });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado!' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha não confere' });
    }

    const { id, nome, admin } = user;

    // eslint-disable-next-line no-console
    // console.log(process.env.JWT_SECRET_TOKEN);

    return res.json({
      user: {
        id,
        nome,
        login,
        admin,
      },
      token: jwt.sign({ id }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }),
    });
  }
}

export default new SessionController();
