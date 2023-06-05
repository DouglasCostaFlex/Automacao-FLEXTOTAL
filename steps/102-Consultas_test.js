Feature('W26-Consultas').tag('102');
const { I, ZoomMenosPage } = inject()
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


}).tag('102-01');


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

}).tag('102-02');

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
}).tag('102-03');

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

}).tag('102-04');
