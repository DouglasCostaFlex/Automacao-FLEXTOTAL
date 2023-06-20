// const { Client } = require('pg');
// const fs = require('fs');
// // Configuração da conexão com o banco de dados
// const client = new Client({
//     user: 'flextotal',
//     host: '192.168.1.235',
//     database: 'rezzadori_automacao_douglas',
//     password: 'Fl3xt0t@L',
//     port: 5432,
// });

// // Conecta ao banco de dados
// client.connect()
//     .then(() => {
//         console.log('Conexão estabelecida com sucesso!');

//         // Executa uma consulta
//         client.query("SELECT id_geral FROM tarefa_monitor tm WHERE cd_monitor = '01' AND cd_tarefa_status = '01' ORDER BY dt_atz DESC LIMIT 1;")
//             .then((result) => {
//                 const idtarefaOFC = result.rows[0].id_geral;
//                 console.log('ID da tarefa:', idtarefaOFC);
                

//                 // //ESCREVER A VARIAVEL EM UM DOCUMENTO PRA TESTAR
              
//                 // Nome do arquivo a ser aberto ou criado
//                 const nomeArquivo = 'C:/Users/flexmobile/Documents/var.txt';
//                 // Variável a ser inserida no arquivo
//                 const minhaVariavel = idtarefaOFC;
//                 exports.exports = minhaVariavel
//                 // Escrever a variável no arquivo
//                 fs.writeFile(nomeArquivo, minhaVariavel, 'utf8', (err) => {
//                     if (err) {
//                         console.error(`Erro ao escrever no arquivo ${nomeArquivo}:`, err);
//                         return;
//                     }
//                     console.log(`Variável '${minhaVariavel}' inserida no arquivo ${nomeArquivo}`);
//                 });
                
        

//             })
//             .catch((err) => {
//                 console.error('Erro ao executar a consulta:', err);
//             })
//     })
//     .catch((err) => {
//         console.error('Erro ao conectar ao banco de dados:', err);
//     });


