Feature('AppWMS').tag('AppWMS');
const { I, ZoomMenosPage } = inject()

const BtnMenu = '/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button'
const FLEXTOTAL = 'https://192.168.1.128:9090/flextotal/login'
const CampoEmail = '//*[@id="mat-input-0"]'
const CampoSenha = '//*[@id="mat-input-1"]'
const BtnLogin = '/html/body/my-app/login/div/div/form/button'
const PaginaAppWMS = 'https://192.168.1.128:9090/flextotal/user/coletor'


Scenario('Tela do AppWMS', () => {

    ZoomMenosPage.ZoomMenos()
    //VOU NA TELA WMS
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/coletor')
    I.acceptPopup()
    I.wait(1)

});

Scenario('Tela Consultas ', () => {

    ZoomMenosPage.ZoomMenos()
    //EU VOU NA TELA DE CONSULTAS
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/coletor/pesquisas')
    I.wait(1)


});

Scenario('01-Consultar itens do endereço errado', () => {

    ZoomMenosPage.ZoomMenos()
    //VOU NA TELA CONSULTAR ITENS DE ENDEREÇO
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/coletor/pesquisaItensEndereco')
    I.wait(2)
    //EU COLOCO CD BARRAS 
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisas-itens-endereco/div/form/mat-form-field/div/div[1]/div/input', '10101323')
    //EU CLICO NO BOTAO 
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisas-itens-endereco/div/form/button')
    I.wait(1)
    //EU ESPERO PELA MENSAGEM DE ERRO
    I.waitForText('Não há itens vinculados a este endereço')


});


Scenario('02-Consultar itens do endereço', () => {

    ZoomMenosPage.ZoomMenos()
    //VOU NA TELA CONSULTAR ITENS DE ENDEREÇO
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/coletor/pesquisaItensEndereco')
    I.acceptPopup('RECARREGAR')
    I.wait(2)
    //EU COLOCO CD BARRAS 
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisas-itens-endereco/div/form/mat-form-field/div/div[1]/div/input', '10-1-09-14-1-A-2')
    //EU CLICO NO BOTAO 
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisas-itens-endereco/div/form/button')
    I.wait(1)
    //EU ESPERO PELOS ITENS  NA TELA
    I.waitForText('03847 - ABRAC.PLAST.300X4.8MM BC 100PCS BRASFORT')
    I.waitForText('24027 - JOELHO P/FOGAO C/TAMPA N 1')
    I.waitForText('22326 - ALARME P/PORTAS OU JANELAS BRASFORT')
    I.wait(2)
    //EU CLICO EM LOTES
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisas-itens-endereco/div/div/mat-table/mat-row[1]/mat-cell[2]')
    I.wait(3)
    I.waitForText('LOTE01', 5)
    I.waitForText('LOTE02', 5)

});

Scenario('03-Consulta Endereços do item (Flag Livres Marcado) ', () => {

    ZoomMenosPage.ZoomMenos()
    //EU VOU PARA PESQUISA DE ENDEREÇOS DO ITEM
    I.amOnPage(' https://192.168.1.128:9090/flextotal/user/coletor/pesquisaEnderecosItem')
    //ACEITO MUDAR DE PAGINA 
    I.acceptPopup()
    //EU COLOCO O CODIGO DE CD
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-endereco-itens/div/div/mat-expansion-panel/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', '03847')
    I.wait(1)
    //EU ADICIONO O ITEM
    I.click('/html/body/div[2]/div/div')
    //EU CLICO NO CHECKBOX
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-endereco-itens/div/div/mat-expansion-panel/div/div/form/div[3]/div/mat-checkbox/label/div')
    //EU CLICO NO BOTAO 'PESQUISAR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-endereco-itens/div/div/mat-expansion-panel/div/div/form/div[4]/button')

    //PRECISA FAZER VALIDAÇÃO AQUI // 

    I.wait(2)
});

Scenario('04-Consulta Endereços do item com Flag Livres Desmarcado ', () => {

    ZoomMenosPage.ZoomMenos()
    //EU VOU PARA PESQUISA DE ENDEREÇOS DO ITEM
    I.amOnPage(' https://192.168.1.128:9090/flextotal/user/coletor/pesquisaEnderecosItem')
    //ACEITO MUDAR DE PAGINA 
    I.acceptPopup()
    //EU COLOCO O CODIGO DE CD
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-endereco-itens/div/div/mat-expansion-panel/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', '03847')
    I.wait(1)
    //EU ADICIONO O ITEM
    I.click('/html/body/div[2]/div/div')
    //EU CLICO NO BOTAO 'PESQUISAR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-endereco-itens/div/div/mat-expansion-panel/div/div/form/div[4]/button')

    //PRECISA VALIDAR AS INFORMAÇOES AQUI

    I.wait(2)

});

//CONTAGEM DE ESTOQUE

Scenario('05-Contagem de estoque Contagem fechada', () => {

    ZoomMenosPage.ZoomMenos()
    I.wait(2)
    //EU VOU PARA A PAGINA DE CONTAGEM DE ESTOQUE
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')
    //EU ACEITO O POPUP
    I.acceptPopup()
    I.wait(1)
    //EU COLOCO O ID DA CONTAGEM FECHADA OBS: A CONTAGEM TEM QUE ESTAR FECHADA NO SISTEMA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', '1000118529349')
    I.wait(1)
    //EU CLICO NO BOTAO DE PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/button')
    I.wait(2)
    I.waitForText('ERRO')
    I.wait(1)

}).tag('ContagemDeEstoqueIDFECHADO');


Scenario('06-Contagem de estoque id errado', () => {

    ZoomMenosPage.ZoomMenos()
    //EU VOU PARA A PAGINA DE CONTAGEM DE ESTOQUE
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')
    //EU ACEITO O POPUP
    I.acceptPopup()
    I.wait(1)
    //EU COLOCO O ID DA CONTAGEM OBS: A CONTAGEM TEM QUE ESTAR PENDENTE NO SISTEMA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', '234234')
    I.wait(1)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/button')
    I.wait(2)
    I.waitForText('Contagem não encontrada ID:')
    I.wait(2)


}).tag('ContagemDeEstoqueIDerrado');



Scenario('07-Contagem de estoque', () => {

    ZoomMenosPage.ZoomMenos()
    //EU VOU PARA A PAGINA DE CONTAGEM DE ESTOQUE
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')
    //EU ACEITO O POPUP
    I.acceptPopup()
    I.wait(3)
    //EU COLOCO O ID DA CONTAGEM OBS: A CONTAGEM TEM QUE ESTAR PENDENTE NO SISTEMA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', '1002064874306')
    I.wait(3)
    //EU CLICO NO BOTAO DE PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/button')
    I.wait(3)
    //EU COLOCO A QUANTIDADE DE ITENS LIDO PARA SOMAR
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/form/div/div[2]/mat-form-field[1]/div/div[1]/div/input', '1')
    I.wait(3)
    //EU APERTO NO BOTAO PARA SOMAR 
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/form/div/div[3]/button[1]')
    I.wait(3)
    I.waitForText('CONFIRMAR',20)
    I.click('CONFIRMAR')
    I.wait(3)
    I.waitForText('OK',20)
    I.click('OK')


}).tag('ContagemDeEstoque');

Scenario('08-Contagem de estoque - Listar Itens', () => {

    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(3)
    I.click('Listar Itens')
    I.wait(3)
    I.waitForText('10155')
    I.click('/html/body/div[2]/div[2]/div/mat-dialog-container/ng-component/mat-dialog-content/mat-list/a[1]/div/div[2]/span[2]')
    I.wait(5)

}).tag('ContagemDeEstoqueListarItens');


Scenario('09-Contagem de estoque - Reiniciar Itens', () => {

    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')
    I.acceptPopup()
    I.wait(3)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(3)
    I.click('Reiniciar Item')
    I.wait(3)
    I.waitForText('CONFIRMAR',20)
    I.click('CONFIRMAR')
    I.wait(3)
    I.waitForText('OK',20)
    I.click('OK')
    I.wait(4)

}).tag('ContagemDeEstoqueReiniciarItens');


Scenario('10-Contagem de estoque - Pular Itens', () => {

    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')
    I.acceptPopup()
    I.wait(2)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(2)
    I.click('Pular Item')
    I.wait(3)
    I.waitForText('CONFIRMAR',20)
    I.click('CONFIRMAR')

}).tag('ContagemDeEstoquePularItem');

//CONFERENCIA DE ENTRADA

Scenario('11-Conferencia de entrada', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/pesquisar')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(2)
    //EU COLOCO O ID GERAL INVÁLIDO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[1]/mat-form-field/div/div[1]/div/textarea', '0000001 ')
    //EU ESPERO    
    I.wait(1)
    //EU CLICO NO BOTAO PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[2]/button')
    //EU ESPERO PELO TEXTO
    I.waitForText('Tarefa não encontrada!')
    //EU ESPERO

}).tag('ConferenciaDeEntradaIDinvalido');

Scenario('12-Conferencia de entrada', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/pesquisar')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(2)
    //EU COLOCO O ID GERAL 
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[1]/mat-form-field/div/div[1]/div/textarea', '1002704747906 ')
    //EU ESPERO    
    I.wait(1)
    //EU CLICO NO BOTAO PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[2]/button')
    //EU ESPERO PELO TEXTO
    I.waitForText('Nota Fiscal Nr: 000235 do Fornecedor: 52549 - 1002 UTILIDADES LTDA EPP')
    //EU ESPERO
    I.wait(2)
    //EU CLICO NO BOTAO CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-conferencia-component/div/div[3]/button[1]')

}).tag('ConferenciaDeEntrada');

Scenario('13-Conferencia de entrada por unidade - CD INVÁLIDO', () => {

      //EU COLOCO O CD DDE BARRAS DO PRODUTO INVÁLIDO
      I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', '00001')
      //EU ESPERO
      I.wait(1)
      //EU CLICO NO BOTAO PARA CONTINUAR
      I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/button[1]')
      //EU ADICIONO O LOTE
     I.waitForText('Este item não está na tarefa.')

}).tag('ConferenciaDeEntradaPorUnidadeCDinválido');


Scenario('14-Conferencia de entrada por unidade - válido', () => {
    

    //EU RECARREGO A PAGINA
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
    I.acceptPopup()
    //EU COLOCO O CD DDE BARRAS DO PRODUTO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/mat-form-field/div/div[1]/div/input', '1234')
    //EU ESPERO
    I.wait(1)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[2]/button[1]')
    //EU ADICIONO O LOTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[1]/mat-form-field/div/div[1]/div/input', ' lot uni automacao')
    //EU COLOCO DATA DE FABRICAÇÃO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[2]/date-picker/mat-form-field/div/div[1]/div[1]/input[1]', '20/01/2023')
    //EU COLOCO DATA DE VENCIMENTOS
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[4]/div[3]/date-picker/mat-form-field/div/div[1]/div[1]/input[1]', '20/01/2026')
    I.wait(2)
    //EU CLICO EM 'CONFIRMAR LOTE'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[5]/button[2]')
    //EU CLICO EM 'NOVO LOTE'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/div/form/div[5]/button[1]')
    I.wait(1)

}).tag('ConferenciaDeEntradaPorUnidade');

Scenario('15-Conferencia de entrada por unidade - Menu - Listar Itens ', () => {

    //EU RECARREGO A PAGINA
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
    //ACEITO O POPUP
    I.acceptPopup()
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
    I.wait(2)
    I.click('Listar Itens')
    I.wait(2)
    I.waitForText('12125 - CONCENTRADO MAQUINA PRETO (B) 945 ML 96-2 RENNER')

}).tag('ConferenciaDeEntrada-Menu-ListarItems');

Scenario('16-Conferencia de entrada por unidade - Menu - Reiniciar Conferência ', () => {
   
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/conferenciaEntrada/1002704747906')
    //ACEITO O POPUP
    I.acceptPopup()
    //EU CLICO NO BOTAO 'MENU'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/conferencia-entrada/div/mat-toolbar/button')
    I.wait(2)
    //EU APERTO EM 'REINICIAR CONFERENCIA'
    I.click('Reiniciar Conferência')
    I.wait(1)
    //EU APERTO NO BOTAO SIM
    I.click('/html/body/div[2]/div[2]/div/mat-dialog-container/confirmation-dialog-component/button[1]')
    I.wait(5)

}).tag('ConferenciaDeEntrada-Menu-ReiniciarConferência');




