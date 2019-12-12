import User from '../models/User';
import Relatorio from '../schemas/Relatorio';

class RelatorioController {
  async store(req, res) {
    const { userId } = req;

    // req.body.user = userId;

    const relatorio = req.body;
    relatorio.user = userId;

    await Relatorio.create(
      relatorio,
    );

    return res.json(relatorio);
  }

  async index(req, res) {
    const relatorios = await Relatorio.find();
    // const relatorios = await Relatorio.find({}).lean();

    return res.json(relatorios);
  }

  async getById(req, res) {
    const relatorio = await Relatorio.find({ id: req.query.id });

    return res.json(relatorio);
  }
}

export default new RelatorioController();
