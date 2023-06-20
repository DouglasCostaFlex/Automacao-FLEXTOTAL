Feature('TelaInicialAppWMS').tag('AppWMS');
const { I, vouParaAbaPage  } = inject()

const BtnMenu = '/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button'
const FLEXTOTAL = 'https://192.168.1.128:9090/flextotal/login'
const CampoEmail = '//*[@id="mat-input-0"]'
const CampoSenha = '//*[@id="mat-input-1"]'
const BtnLogin = '/html/body/my-app/login/div/div/form/button'
const PaginaAppWMS = 'https://192.168.1.128:9090/flextotal/user/coletor'


Scenario('101-01-Tela do AppWMS', () => {

    
    //VOU NA TELA WMS
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/coletor')
   

});


