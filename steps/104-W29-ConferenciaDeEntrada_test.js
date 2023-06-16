Feature('ConferenciaDeEntrada').tag('104');
const idTarefa = require('../consulta')
const { I, vouParaAbaPage,} = inject()
const IdTarefaInvalido = ('0000001')
const IdTarefaValido = ('1002704724687')
const CdBarraUnidade = ('7896003816389')
const CdBarraCaixa = ('67896003816381')
const CdBarraInvalido = ('00000')


//CONFERENCIA DE ENTRADA

Scenario('104-01-Conferencia de entrada - inválido', () => {
    
    
    //EU VOU ATE A PAGINA W29
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/pesquisar')
   
    //EU COLOCO O ID GERAL INVÁLIDO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[1]/mat-form-field/div/div[1]/div/textarea',idTarefa)
    //EU ESPERO    
    I.wait(1)
    //EU CLICO NO BOTAO PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[2]/button')
    //EU ESPERO PELO TEXTO
    I.waitForText('Tarefa não encontrada!',10)


}).tag('104-01');

// Scenario('104-02-Conferencia de entrada - válido', () => {

//     //EU VOU ATE A PAGINA W29
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/pesquisar')
   
//     //EU COLOCO O ID GERAL 
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[1]/mat-form-field/div/div[1]/div/textarea', IdTarefaValido)
//     //EU ESPERO    
//     I.wait(1)
//     //EU CLICO NO BOTAO PESQUISAR
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[2]/button')
    
//     //EU ESPERO PELO TEXTO
//     I.waitForText('Nota Fiscal Nr: 123123 do Fornecedor: 100 - INCOESME IND COM DE ESQUADRIAS LTDA ME',10)
//     //EU ESPERO
//     I.wait(2)
//     //EU CLICO NO BOTAO CONTINUAR
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[3]/button[1]')
//     I.wait(2)

// }).tag('104-02');

// Scenario('104-03-Conferencia de entrada - CD de Barras Inválido', () => {

//     //EU COLOCO O CD DDE BARRAS DO PRODUTO INVÁLIDO
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', CdBarraInvalido)
//     //EU ESPERO
//     I.wait(1)
//     //EU CLICO NO BOTAO PARA CONTINUAR
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/button[1]')
//     //EU ADICIONO O LOTE
//     I.wait(2)
//     I.waitForText('Este item não está na tarefa.',10)

// }).tag('104-03');

// Scenario('104-04-Conferencia de entrada por unidade - CD Válido', () => {


//     //EU RECARREGO A PAGINA
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
   
    

// }).tag('104-04');


// Scenario('104-04-Conferencia de entrada por unidade - CD Válido', () => {


//     //EU RECARREGO A PAGINA
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
   
//     //EU COLOCO O CD DDE BARRAS DO PRODUTO
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
//     //EU ESPERO
//     I.wait(1)
//     //EU CLICO NO BOTAO PARA CONTINUAR
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/button[1]')
//     //EU ADICIONO O LOTE
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[1]/mat-form-field/div/div[1]/div/input', ' lot uni automacao')
//     //EU COLOCO DATA DE FABRICAÇÃO
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[2]/date-picker/mat-form-field/div/div[1]/div[1]/input[1]', '20/01/2023')
//     //EU COLOCO DATA DE VENCIMENTOS
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[3]/date-picker/mat-form-field/div/div[1]/div[1]/input[1]', '20/01/2026')
//     I.wait(2)
//     //EU CLICO EM 'CONFIRMAR LOTE'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[5]/button[2]')
//     //EU CLICO EM 'NOVO LOTE'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[5]/button[1]')
//     I.wait(1)

// }).tag('104-04');

// Scenario('104-05-Conferencia de entrada por unidade - Menu - Listar Itens ', () => {

//     //EU RECARREGO A PAGINA
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
 
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
//     I.wait(2)
//     I.click('Listar Itens')
//     I.wait(2)
//     I.waitForText('12125 - CONCENTRADO MAQUINA PRETO (B) 945 ML 96-2 RENNER')

// }).tag('104-05');

// Scenario('104-06-Conferencia de entrada por unidade - Menu - Informar Quantidade inválido', () => {

  
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
   
//     //EU CLICO NO BOTAO 'MENU'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
//     I.wait(2)
//     //EU APERTO EM 'Informar Quantidade'
//     I.click('Informar quantidade')
//     I.wait(2)
//     I.fillField('Informe o código do supervisor','000')
//     I.wait(1)
//     I.click('Ok')
//     I.wait(1)
//     I.waitForText('Código do supervisor inexistente!')
//     I.wait(2)

// }).tag('104-06');

// Scenario('104-07-Conferencia de entrada por unidade - Menu - Informar Quantidade válido', () => {

 
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
   
//     //EU CLICO NO BOTAO 'MENU'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
//     I.wait(2)
//     //EU APERTO EM 'Informar Quantidade'
//     I.click('Informar quantidade')
//     I.wait(2)
//     I.fillField('Informe o código do supervisor','102')
//     I.wait(1)
//     I.click('Ok')
//     I.waitForText('Supervisor - REGIÃO - LITORAL',10)
//     I.wait(2)
  

// }).tag('104-07');

// Scenario('104-08-Conferencia de entrada por unidade - Menu - Enviar Pendentes ', () => {
    
//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
 
//     //EU CLICO NO BOTAO 'MENU'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
//     I.wait(2)
//     //EU APERTO EM 'Informar Enviar Pendentes'
//     I.click('Enviar Pendentes')
//     I.wait(2)

// }).tag('104-08');

// Scenario('104-09-Conferencia de entrada por unidade - Menu - Reiniciar Conferência ', () => {

//     vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
   
//     //EU CLICO NO BOTAO 'MENU'
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
//     I.wait(2)
//     //EU APERTO EM 'REINICIAR CONFERENCIA'
//     I.click('Reiniciar Conferência')
//     I.wait(1)
//     //EU APERTO NO BOTAO SIM
//     I.click('/html/body/div[2]/div[2]/div/mat-dialog-container/confirmation-dialog-component/button[1]')
//     I.wait(5)

// }).tag('104-09');



