var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarQuiz(usuario, formattedTime, idQuiz, totalCorrect, totalQuestions) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarQuiz():", usuario, formattedTime, idQuiz, totalCorrect, totalQuestions);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = ` insert into quiz (fk_usuario, tempo_partida, game_id, qtd_Acertos, qtd_erros) values (${usuario}, '${formattedTime}', '${idQuiz}', ${totalCorrect}, '${totalQuestions}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibir() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarQuiz():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
       SELECT * FROM quiz 
JOIN usuario ON quiz.fk_usuario = usuario.id 
WHERE quiz.game_id = 1 ORDER BY quiz.qtd_acertos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirTotal() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function exibirTotal():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
    SELECT 
    usuario.id, 
    usuario.apelido, 
    MAX(quiz.qtd_acertos) AS max_acertos, 
    SUM(quiz.qtd_acertos) AS total_acertos 
FROM quiz 
JOIN usuario ON quiz.fk_usuario = usuario.id 
GROUP BY usuario.id, usuario.nome 
ORDER BY total_acertos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pessoalQuiz() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarQuiz():");

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
SELECT 	game_id, SUM(qtd_Acertos) AS total_acertos, SUM(qtd_erros) AS total_questoes,
		SUM(qtd_erros) - SUM(qtd_Acertos) AS diferenca_acertos_questoes
		FROM Quiz  WHERE fk_usuario = ${usuario}  GROUP BY game_id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarQuiz, exibir, exibirTotal, pessoalQuiz
};