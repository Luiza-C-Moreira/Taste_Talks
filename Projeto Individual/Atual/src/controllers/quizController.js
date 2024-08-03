var quizModel = require("../models/quizModel");

function cadastrarQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html


    var usuario = req.body.fk_usuarioServer;
    var formattedTime = req.body.tempoServer;
    var idQuiz = req.body.game_idServer;
    var totalCorrect = req.body.questoesCorretasServer;
    var totalQuestions = req.body.qtdQuestoesServer;


    // Faça as validações dos valores
    if (usuario == undefined) {
        res.status(400).send("o seu acerto está undefined!");
    } else if (formattedTime == undefined) {
        res.status(400).send("Seu tempo total está undefined!");
    } else if (idQuiz == undefined) {
        res.status(400).send("Seu tempo total está undefined!"); 
    } else if (totalCorrect == undefined) {
        res.status(400).send("O número total de questões está undefined!");
    } else if (totalQuestions == undefined) {
        res.status(400).send("Sua posição está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo total Model.js
        quizModel.cadastrarQuiz(usuario,formattedTime, idQuiz, totalCorrect, totalQuestions, )
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao pegar as métricas do jogo! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }


    function exibir(req, res) {
    
        quizModel.exibir().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao pegar as métricas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
    function exibirTotal(req, res) {
    
        quizModel.exibirTotal().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao pegar as métricas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
    function pessoalQuiz(req, res) {
    
        quizModel.pessoalQuiz().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao pegar as métricas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    
module.exports = {
    cadastrarQuiz, exibir, exibirTotal, pessoalQuiz
}