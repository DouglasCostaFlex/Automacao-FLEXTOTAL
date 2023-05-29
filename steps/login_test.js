Feature('Login');

Scenario('Login',  ({ I }) => {

    I.wait(3)
    I.amOnPage('https://192.168.1.128:9090/flextotal/login')
    I.click('//*[@id="details-button"]')
    I.click('//*[@id="proceed-link"]')
    I.wait(3)
    I.fillField('//*[@id="mat-input-0"]', 'flexmobile')
    I.fillField('//*[@id="mat-input-1"]', '48303523')
    I.click('/html/body/my-app/login/div/div/form/button')
    I.waitForElement('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/mat-toolbar/a/span')
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/favoritos/div/mat-card[1]/mat-icon')
    I.wait(2)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/mat-expansion-panel/div/div/relatorio-filtros/form/div[3]/button[1]')
    I.waitForElement('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/relatorio-container-component/div/relatorio-component/div/mat-expansion-panel/mat-expansion-panel-header/span[1]/mat-panel-title')
    I.wait(3)

});
