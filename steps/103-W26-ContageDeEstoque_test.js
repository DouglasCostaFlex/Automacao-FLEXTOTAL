Feature('W29-ContagemDeEStoque').tag('103');
const { I, ZoomMenosPage } = inject()


//CONTAGEM DE ESTOQUE

Scenario('01-Contagem de estoque Contagem fechada', () => {

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

}).tag('103-01');


Scenario('02-Contagem de estoque id errado', () => {

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


}).tag('103-02');



Scenario('03-Contagem de estoque', () => {

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
    I.waitForText('CONFIRMAR')
    I.click('CONFIRMAR')
    I.wait(3)
    I.waitForText('OK')
    I.click('OK')


}).tag('103-03');

Scenario('04-Contagem de estoque - Listar Itens', () => {

    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(3)
    I.click('Listar Itens')
    I.wait(3)
    I.waitForText('10155')
    I.click('/html/body/div[2]/div[2]/div/mat-dialog-container/ng-component/mat-dialog-content/mat-list/a[1]/div/div[2]/span[2]')
    I.wait(5)

}).tag('103-04');


Scenario('05-Contagem de estoque - Reiniciar Itens', () => {

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

}).tag('103-05');


Scenario('06-Contagem de estoque - Pular Itens', () => {

    I.amOnPage('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')
    I.acceptPopup()
    I.wait(2)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(2)
    I.click('Pular Item')
    I.wait(3)
    I.waitForText('CONFIRMAR',20)
    I.click('CONFIRMAR')

}).tag('103-06');



