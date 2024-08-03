var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/cadastrarQuiz", function (req, res) {
    quizController.cadastrarQuiz(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/exibir", function (req, res) {
    quizController.exibir(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/exibirTotal", function (req, res) {
    quizController.exibirTotal(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.post("/pessoalQuiz", function (req, res) {
    quizController.exibirTotal(req, res);
});
module.exports = router;