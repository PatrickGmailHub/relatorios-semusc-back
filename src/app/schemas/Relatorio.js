import mongoose from 'mongoose';

/* const envolvidoSchema = new mongoose.Schema(
  {
    envolvido: {
      type: String,
    },
    nome: {
      type: String,
    },
    end: {
      type: String,
    },
    bairro: { type: String },
    cidade: { type: String },
    profissao: { type: String },
    documentacao: { type: String },
    dt_nasc: { type: Date },
    idade_aparente: { type: Number },
  },
); */

const RelatorioSchema = new mongoose.Schema({
  user: {
    type: Number,
    required: true,
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
  plVTR: {
    type: String,
  },
  local: {
    type: String,
  },
  bairro: {
    typr: String,
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
  // envolvidos: {
  //   envolvido: [envolvidoSchema],
  // },
  /* envolvidos: [{
    envolvido: String,
    nome: String,
    endereco: String,
    bairro: String,
    cidade: String,
    profissao: String,
    documentacao: String,
    dt_nasc: Date,
    idade_aparente: Number,
  }], */
  // envolvidos: [{}],
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
