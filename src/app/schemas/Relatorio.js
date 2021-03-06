import mongoose from 'mongoose';

const RelatorioSchema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
  },
  autoria: {
    type: String,
  },
  resp_relatorio: {
    type: String,
  },
  dt_atendimento: {
    type: Date,
  },
  hr_local: {
    type: Date,
  },
  hr_fato: {
    type: Date,
  },
  plVTR: {
    type: String,
  },
  local: {
    type: String,
  },
  bairro: {
    type: String,
  },
  pt_referencia: {
    type: String,
  },
  termino_atd: {
    type: String,
  },
  num_ocorrencia: {
    type: String,
  },
  tipo_ocorrencia: {
    type: String,
  },
  tipo_atendimento: {
    type: String,
  },
  envolvidos: {
    type: Array,
    default: [],
  },
  armas_materiais: {
    type: String,
  },
  historico: {
    type: String,
  },
}, {
  timestamps: true,
  toJSON: {
    transform: (document, ret) => {
      const relatorio = { id: ret._id, ...ret };
      delete relatorio._id;
      delete relatorio.__v;
      return relatorio;
    },
  },
});

export default mongoose.model('Relatorio', RelatorioSchema);
