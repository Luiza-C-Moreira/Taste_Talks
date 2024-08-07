var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                 function (resultadoAutenticar) {
                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                      if (resultadoAutenticar.length == 1) {
                          console.log(resultadoAutenticar);

                                  if (resultadoAutenticar.length > 0) {
                                      res.json({
                                          id: resultadoAutenticar[0].id,
                                          nome: resultadoAutenticar[0].nome,
                                        apelido: resultadoAutenticar[0].apelido,
                                        cpf: resultadoAutenticar[0].cpf,
                                        email: resultadoAutenticar[0].email,
                                        senha: resultadoAutenticar[0].senha,
                                      });
                              
                      } else if (resultadoAutenticar.length == 0) {
                          res.status(403).send("Email e/ou senha inválido(s)");
                      } else {
                          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                      }
                  }
                }
                  
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var apelido = req.body.userServer;
    var cpf = req.body.cpfServer;
    var pais = req.body.paisServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (apelido == undefined) {
        res.status(400).send("Seu apelido está undefined!");
    }else if (cpf == undefined) {
        res.status(400).send("Seu CPF está undefined!");
    }else {
        console.log('o apelido é', apelido )
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, apelido, cpf, pais)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
    }
    function exibir(req, res) {
    
        usuarioModel.exibir().then(function (resultado) {
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
    autenticar,
    cadastrar,
    exibir,
}