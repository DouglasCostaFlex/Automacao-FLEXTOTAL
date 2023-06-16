// const { Client } = require('pg');
// module.exports(conectarBancoDeDados)
// // Método para estabelecer a conexão com o banco de dados
// function conectarBancoDeDados() {

//   const client = new Client({
//     // Configurações de conexão com o banco de dados
//     host: 'localhost',
//     user: 'seu_usuario',
//     password: 'sua_senha',
//     database: 'seu_banco_de_dados',
//     port: 5432, // Porta padrão do PostgreSQL
//   });

//   return client.connect()
//     .then(() => {
//       console.log('Conexão estabelecida com sucesso!');
//       return client;
//     })
//     .catch((error) => {
//       console.error('Erro ao conectar ao banco de dados:', error);
//     });
// }

// // Exemplo de utilização do método
// conectarBancoDeDados()
//   .then((client) => {
//     // Executa uma consulta
//     client.query("SELECT id_geral FROM tarefa_monitor tm WHERE cd_monitor = '01' AND cd_tarefa_status = '01' ORDER BY dt_atz DESC LIMIT 1;")
//       .then((result) => {
//         const idTarefa = result.rows[0].id_geral; // Acessa o valor da coluna id_geral
//         console.log('ID da tarefa:', idTarefa);

//         // Exporta a variável idTarefa para outro arquivo
//         module.exports = idTarefa;
//       })
//       .catch((error) => {
//         console.error('Erro ao executar a consulta:', error);
//       });
//   });
