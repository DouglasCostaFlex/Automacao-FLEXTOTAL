Feature('W41-Piking').tag('105');
const { I, ZoomMenosPage } = inject()


Scenario('105-01 Filtros', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    I.waitForText('Origem')
    I.waitForText('Item')
    I.waitForText('Quantidade')
    I.waitForText('End. Origem')
    I.waitForText('End. Destino')
    I.waitForText('Situação')

}).tag('104-01');


Scenario('105-02 Filtros - Origem', () => {

   
    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    //EU CLICO EM ORIGEM
    I.click('//*[@id="mat-option-0"]')
    //EU CLICO NO BOTAO PESQUISAR
    I.click('//*[@id="cdk-accordion-child-0"]/div/div/mat-form-field[3]/div/div[1]/div[2]/button')
    I.wait(1)
  
}).tag('104-02');

Scenario('105-03 Filtros - Quantidade', () => {

 
    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    //EU CLICO EM QUANTIDADES
    I.click('//*[@id="mat-option-2"]')
    I.wait(1)
    //EU COLOCO A QUANTIDADE '10'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[3]/div/div[1]/div[1]/input','10')
    I.wait(1)

}).tag('104-03');

Scenario('105-04 Filtros - Fim. End Origem', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    //EU CLICO EM QUANTIDADES
    I.click('//*[@id="mat-option-3"]')
    I.wait(1)
    //EU COLOCO NO CAMPO BUSCA '10-1-08-04-1-B-1'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[3]/div/div[1]/div[1]/input',' 10-1-08-04-1-B-1')
    I.wait(1)
    
}).tag('104-04');

Scenario('105-05 Filtros - Fim. Destino', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    //EU CLICO EM 'Fim. Destino'
    I.click('//*[@id="mat-option-4"]')
    I.wait(1)
    //EU COLOCO NO CAMPO BUSCA '10-1-08-04-0-B-200'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[3]/div/div[1]/div[1]/input','10-1-08-04-0-B-200')
    I.wait(1)

}).tag('104-05');

Scenario('105-06 Filtros - Situação', () => {

    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    //EU CLICO EM 'SITUAÇÃO'
    I.click('//*[@id="mat-option-5"]')
    I.wait(1)
    //EU COLOCO NO CAMPO BUSCA 'EM ANDAMENTO'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[3]/div/div[1]/div[1]/input','EM ANDAMENTO')
    I.wait(1)
    
}).tag('104-06');

Scenario('105-07 Filtros - Eu ia. Tarefa', async () => {
  
    //EU VOU ATE A PAGINA W29
    I.amOnPage('https://192.168.1.128:9090/flextotal/user/monitor/W41')
    //EU ACEITO POPUP
    I.acceptPopup()
    //EU ESPERO
    I.wait(1)
    //EU ABRO A ABA FILTROS
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/mat-expansion-panel-header')
    I.wait(1)
    //EU CLICO NO MENU FILTROS 'CONSULTAR POR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[1]')
    I.scrollIntoView('//*[@id="mat-option-7"]/span')
    I.wait(1)
    // EU CLICO EM 'EU IA. TAREFA'
    I.click('//*[@id="mat-option-7"]')
    I.wait(1)
    //EU COLOCO NO CAMPO BUSCA '1002675054409'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/monitor-pesquisa-component/div/grid-card-component/div/mat-expansion-panel/div/div/div/mat-form-field[3]/div/div[1]/div[1]/input','1002675054406')
    //EU CLICO NO BOTAO PESQUISAR
    I.click('//*[@id="cdk-accordion-child-0"]/div/div/mat-form-field[3]/div/div[1]/div[2]/button')
    I.waitForText('10-1-08-04-0-B-200')
    I.wait(1)
   

}).tag('104-07');




