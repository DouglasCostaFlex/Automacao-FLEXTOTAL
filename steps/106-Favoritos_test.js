// Feature('Favoritos').tag('106');
// const { I,vouParaAbaPage  } = inject()


// Scenario('106-01 Relatorios de vendas', () => {

//     I.amOnPage('https://192.168.1.128:9090/flextotal/user/favoritos')
//     I.acceptPopup('')
//     I.wait(2)
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/favoritos/div/mat-card[1]')
//     I.wait(1)
//     I.fillField('//*[@id="mat-input-2"]','01/01/2017')
//     I.fillField('//*[@id="mat-input-3"]','01/01/2020')
//     I.click('//*[@id="cdk-accordion-child-0"]/div/relatorio-filtros/form/div[3]/button[1]')
//     I.wait(3)
//     I.waitForText('Resultado')
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/relatorio-component/div/button')
//     I.wait(1)
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/relatorio-component/div/mat-expansion-panel[2]')
//     I.wait(2)
//     I.scrollIntoView('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/relatorio-component/div/button')
//     I.wait(1)
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/relatorio-component/div/mat-expansion-panel[2]/div/div/relatorio-cubo-component/div/mat-expansion-panel/mat-expansion-panel-header/span[1]/mat-panel-title')
//     I.wait('3')

// }).tag('106-01');


// // AQUI NAO ESTA COMPLETO
// Scenario('106-02 Consulta sequencia do item da NFe - Nota eletronica - Erro sefaz', () => {

//     I.amOnPage('https://192.168.1.128:9090/flextotal/user/favoritos')
//     I.acceptPopup('')
//     I.wait(2)
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/favoritos/div/mat-card[2]')
//     I.wait(2)
//     I.waitForText('Nota Fiscal')
//     I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/mat-expansion-panel/div/div/relatorio-filtros/form/div[1]/input-lookup/mat-form-field[2]')
//     I.wait(2)
//     I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/mat-expansion-panel/div/div/relatorio-filtros/form/div[1]/input-lookup/mat-form-field[1]','1002702236791')
//     I.wait(100)


//     // I.click('Nota Fiscal' ,'1002702236791')
//     // I.wait(100)

   
   

// }).tag('106-02');