var forumModel = require("../models/forumModel");

function cadastrarForum(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario = req.body.usuarioServer;
    var nomeRestaurante = req.body.nomeRestauranteServer;
    var avaliacao = req.body.avaliacaoServer;
    var descricao = req.body.descricaoServer;
    var imagem = req.body.imagemServer;


    // Faça as validações dos valores
    if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (nomeRestaurante == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (avaliacao == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    }else if (imagem == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    }else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        forumModel.cadastrarForum(usuario, nomeRestaurante, avaliacao, descricao, imagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o post! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }


    function exibir(req, res) {
    
        forumModel.exibir().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os posts: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    

    function restaurante(req, res) {
    
        forumModel.restaurante().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os restaurantes: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    


module.exports = {
    cadastrarForum, exibir, restaurante
}