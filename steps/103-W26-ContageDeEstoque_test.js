Feature('W29-ContagemDeEStoque').tag('103');
const { I, vouParaAbaPage } = inject()

const ContagemFechada = ('1000118529349')
const ContagemAberta = ('1002064874306')

// CONTAGEM DE ESTOQUE

Scenario('103-01-Contagem de estoque Contagem fechada', () => {

   
    vouParaAbaPage.IrParaPagina(' https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')

    //EU COLOCO O ID DA CONTAGEM FECHADA OBS: A CONTAGEM TEM QUE ESTAR FECHADA NO SISTEMA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', ContagemFechada)
    I.wait(1)
    //EU CLICO NO BOTAO DE PESQUISAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/button')
    I.wait(5)
    I.waitForText('ERRO')
    I.wait(1)

}).tag('103-01');


Scenario('103-02-Contagem de estoque id errado', () => {


    vouParaAbaPage.IrParaPagina(' https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')

    //EU COLOCO O ID ERRADO DA CONTAGEM 
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', '0000')
    I.wait(1)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/button')
    I.wait(2)
    I.waitForText('Contagem não encontrada ID:')
    I.wait(2)


}).tag('103-02');



Scenario('103-03-Contagem de estoque', () => {

    vouParaAbaPage.IrParaPagina(' https://192.168.1.128:9090/flextotal/user/estoque/contagem/pesquisar')

    //EU COLOCO O ID DA CONTAGEM OBS: A CONTAGEM TEM QUE ESTAR PENDENTE NO SISTEMA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/pesquisa-contagem-component/div/form/mat-form-field/div/div[1]/div/input', ContagemAberta)
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
    //EU APERTO NO BOTAO 'CONFIRMAR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/form/div/div[3]/button[2]')

}).tag('103-03');

Scenario('103-04-Contagem de estoque - Listar Itens', () => {

    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')

    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(3)
    I.click('Listar Itens')
    I.wait(3)
    I.waitForText('10155', 5)
    I.click('/html/body/div[2]/div[2]/div/mat-dialog-container/ng-component/mat-dialog-content/mat-list/a[1]/div/div[2]/span[2]')
    I.wait(5)

}).tag('103-04');


Scenario('103-05-Contagem de estoque - Reiniciar Itens', () => {

    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')

    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(3)
    I.click('Reiniciar Item')
    I.wait(3)
    I.waitForText('CONFIRMAR', 20)
    I.click('CONFIRMAR')
    I.wait(3)
    I.waitForText('OK', 20)
    I.click('OK')
    I.wait(4)

}).tag('103-05');


Scenario('103-06-Contagem de estoque - Pular Itens', () => {

    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/contagem/1002064874306')

    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/contagem-component/div/mat-toolbar/button')
    I.wait(2)
    I.click('Pular Item')
    I.wait(3)
    I.waitForText('CONFIRMAR', 5)
    I.click('CONFIRMAR')

}).tag('103-06');




