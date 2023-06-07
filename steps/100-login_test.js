Feature('Login').tag('Login');
const { I } = inject()
//VARIAVEIS DO LOGIN
const BtnMenu = '/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button'
const FLEXTOTAL = 'https://192.168.1.128:9090/flextotal/login'
const CampoEmail = '//*[@id="mat-input-0"]'
const CampoSenha = '//*[@id="mat-input-1"]'
const BtnLogin = '/html/body/my-app/login/div/div/form/button'
const PaginaAppWMS = 'https://192.168.1.128:9090/flextotal/user/coletor'



// Scenario('Login com usúario errado', () => {

//   //EU AGUARDOCLS
//   I.wait(3)
//   //VOU ATÉ A PAGINA FLEX TOTAL.
//   I.amOnPage(FLEXTOTAL)
//   //RESOLVER ERRO DE PAGINA NAO SEGURA//
//   I.click('//*[@id="details-button"]')
//   I.click('//*[@id="proceed-link"]')
//   // RESOLVENDO ERRO DE PAGINA SEGURA//
//   I.wait(3)
//   //EU COLOCO MEU ID LOGIN ERRADO
//   I.fillField(CampoEmail, 'flexmo')
//   //EU COLOCO MINHA SENHA CORRETA
//   I.fillField(CampoSenha, '48303523')
//   //EU APERTO NO BOTAO
//   I.click(BtnLogin)
//   I.wait(3)
//   I.seeInPopup('Login inválido')
//   I.acceptPopup('Login inválido')

// }).tag('UsuarioErrado');

// Scenario('Login com senha inválida', () => {

//   I.amOnPage(FLEXTOTAL)
//   I.wait(3)
//   I.acceptPopup()
//   //EU COLOCO ID DE USUARIO CORRETO
//   I.fillField(CampoEmail, 'flexmobile')
//   //EU COLOCO MINHA SENHA INVALIDA
//   I.fillField(CampoSenha, '3523')
//   //EU APERTO NO BOTAO
//   I.click(BtnLogin)
//   I.wait(3)
//   //EU ESPERO PELA MENSAGEM NO POP UP 'SENHA INVÁLIDA'
//   I.seeInPopup('Senha inválida')
//   //EU APERTO OK NO POP DE LOGIN INVALIDO
//   I.acceptPopup('Senha inválida')
  

// }).tag('SenhaErrada');

Scenario('Login com dados corretos', () => {

  //EU AGUARDOCLS
  I.wait(3)
  //VOU ATÉ A PAGINA FLEX TOTAL.
  I.amOnPage(FLEXTOTAL)
  //RESOLVER ERRO DE PAGINA NAO SEGURA//
  I.click('//*[@id="details-button"]')
  I.click('//*[@id="proceed-link"]')
  // RESOLVENDO ERRO DE PAGINA SEGURA//
  I.wait(3)
  I.fillField(CampoEmail, 'flexmobile')
  //EU COLOCO MINHA SENHA
  I.fillField(CampoSenha, '48303523')
  //EU APERTO NO BOTAO
  I.forceClick(BtnLogin)
  I.waitForElement(BtnMenu,5)
}).tag('LoginCorreto');
