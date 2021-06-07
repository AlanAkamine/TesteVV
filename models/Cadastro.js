const mongoose = require("mongoose");

const cadastroSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: false,
    },
    sobrenome: {
      type: String,
      required: false,
    },
    cpf: {
      type: Number,
      required: false,
    },
    telefone: {
      type: Number,
      required: true,
    },
    receber_email: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: true
  });
  
module.exports = mongoose.model("Cadastro", cadastroSchema);
  