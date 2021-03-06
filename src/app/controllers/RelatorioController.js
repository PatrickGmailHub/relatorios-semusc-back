import User from '../models/User';
import Relatorio from '../schemas/Relatorio';

class RelatorioController {
  async store(req, res) {
    const { userId } = req;
    const { id } = req;

    console.log(`userId: ${userId}`);
    console.log(`id: ${id}`);

    // req.body.user = userId;

    const relatorio = req.body;
    relatorio.user = userId;

    console.log(relatorio);

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

  async indexUserId(req, res) {
    const relatorios = await Relatorio.find({ user: req.userId });
    // const relatorios = await Relatorio.find({}).lean();

    return res.json(relatorios);
  }

  async getById(req, res) {
    const relatorio = await Relatorio.findById(req.params.id);

    return res.json(relatorio);
  }

  async update(req, res) {
    const relUpdate = await Relatorio.findByIdAndUpdate(req.params.id, req.body);

    return res.json(relUpdate);
  }

  async delete(req, res) {
    await Relatorio.findByIdAndRemove(req.params.id);

    return res.send();
  }
}

export default new RelatorioController();
