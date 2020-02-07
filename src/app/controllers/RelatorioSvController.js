import User from '../models/User';
import RelatorioSv from '../schemas/RelatorioSv';

class RelatorioSvController {
  async store(req, res) {
    const { userId } = req;
    const { id } = req;

    console.log(`userId: ${userId}`);
    console.log(`id: ${id}`);

    // req.body.user = userId;

    const relatorioSv = req.body;
    relatorioSv.user = userId;

    console.log(relatorioSv);

    await RelatorioSv.create(
      relatorioSv,
    );

    return res.json(relatorioSv);
  }

  async index(req, res) {
    const relatoriosSv = await RelatorioSv.find();
    // const relatorios = await Relatorio.find({}).lean();

    return res.json(relatoriosSv);
  }

  async indexUserId(req, res) {
    const relatoriosSv = await RelatorioSv.find({ user: req.userId });
    // const relatorios = await Relatorio.find({}).lean();

    return res.json(relatoriosSv);
  }

  async getById(req, res) {
    const relatorioSv = await RelatorioSv.findById(req.params.id);

    return res.json(relatorioSv);
  }

  async update(req, res) {
    const relSvUpdate = await RelatorioSv.findByIdAndUpdate(req.params.id, req.body);

    return res.json(relSvUpdate);
  }

  async delete(req, res) {
    await RelatorioSv.findByIdAndRemove(req.params.id);

    return res.send();
  }
}

export default new RelatorioSvController();
