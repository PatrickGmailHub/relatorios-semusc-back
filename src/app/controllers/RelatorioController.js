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
    const relatorios = await Relatorio.find().lean();
    // const relatorios = await Relatorio.find({}).lean();

    return res.json(relatorios);
  }
}

export default new RelatorioController();
