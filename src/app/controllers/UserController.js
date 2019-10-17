import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const { login } = req.body;

    const user = await User.findOne({ where: { login } });
  }
}

export default new UserController();
