var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");

//Recebendo os dados do html e direcionando para a função cadastrar de forumController.js
router.post("/cadastrarForum", function (req, res) {
    forumController.cadastrarForum(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de forumController.js
router.post("/exibir", function (req, res) {
    forumController.exibir(req, res);
});
module.exports = router;