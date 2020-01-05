import User from '../models/User';

class UserController {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async store(req, res) {
    const user = await User.create(req.body);

    return res.json(user);
  }

  async getId(req, res) {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } });

    return res.json(user);
  }

  async update(req, res) {
    const { login } = req.body;

    const user = await User.findOne({ where: { login } });
  }

  async delete(req, res) {
    const { id } = req.params;
    await User.destroy({ where: { id } });
  }
}

export default new UserController();
