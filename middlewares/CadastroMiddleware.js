const { validate: isUuid } = require("uuid");
const Cadastro = require("../models/Cadastro");

module.exports = {
  async getCadastro(req, res, next) {
    const { id } = req.params;

    if (!isUuid(id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    try {
      const cadastro = await Cadastro.findById(id);
      res.cadastro = cadastro;
      if (!cadastro) {
        return res.status(404).json({ error: "Cadastro not found" });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }

    next();
  },
};
