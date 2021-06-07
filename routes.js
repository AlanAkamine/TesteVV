const express = require("express");
const routes = express.Router();

const CadastroController = require("./controllers/CadastroController");
const CadastroMiddleware = require("./middlewares/CadastroMiddleware");

routes.get("/", CadastroController.index);

routes.get("/cadastro", CadastroController.index);

routes.post("/cadastro", CadastroController.store);

routes.put("/cadastro/:id", CadastroMiddleware.getCadastro, CadastroController.update);

//routes.delete("/cadastro/:id", CadastroMiddleware.getCadastro, CadastroController.delete);

//routes.patch("/cadastro/:id", CadastroMiddleware.getCadastro, CadastroController.updateLike);

module.exports = routes;