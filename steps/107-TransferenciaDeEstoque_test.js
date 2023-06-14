Feature('TransferenciaDeEstoque').tag('107');
const { I, vouParaAbaPage } = inject()

const CdBarraUnidade = ('7898493996633')
const CdBarraCaixa = ('37898493996634')
const CdBarraOrigem = ('1002198017019')
const CdBarraDestino = ('1000121199293')

Scenario('107-01 Endereço de origem inválido', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')

    //EU COLOCO O CODIGO DE ORIGEM INVÁLIDO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', '0000')
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU AGUARDO PELA MENSAGEM DE ERRO
    I.waitForText('Endereço código 0 não localizado!')
    //EU AGUARDO
    I.wait(2)

}).tag('107-01');

Scenario('107-02 Endereço de origem válido', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')
  
    //EU COLOCO O CODIGO DE ORIGEM
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU AGUARDO
    I.wait(2)

}).tag('107-02');

// //--------------------

Scenario('107-03 Transferencia de produto por Unidade - Quantidade Maior que o endereço ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')
  
    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    I.wait(2)
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    I.wait(2)
    //EU AGUARDO
    I.wait(2)
    //EU AGUARDO
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    I.wait(3)
    I.waitForText('Dt.Fabricacao:')
    I.waitForText('Lote:')
    //EU ADICIONE '1' EM QUANTIDADE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[1]/div/div[1]/div/input', '999999999')
    I.wait(2)
    //EU CLICO NO BOTAO SOMAR 
    I.click('SOMAR')
    I.waitForText('Quantidade maior do que em estoque no endereço!')


}).tag('107-03');

Scenario('107-04 Transferencia de produto por Unidade - Destino inválido ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')

    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU AGUARDO
    I.wait(2)
    //EU AGUARDO
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    I.wait(1)
    I.waitForText('Dt.Fabricacao:')
    I.waitForText('Lote:')
    //EU ADICIONO o CD BARRA SOMAR 12345 EM 'CD DE BARRAS SOMAR'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/button[1]')
    I.wait(2)
    //EU ADICIONE '1' EM QUANTIDADE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[1]/div/div[1]/div/input', '1')
    I.wait(2)
    //EU CLICO NO BOTAO SOMAR
    I.click('SOMAR')
    I.wait(2)
    //EU ADICIONO AO ENDEREÇO DE DESTINO O ID 1000121199293 QUE É PEND.ARMAZENAMENTO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/mat-form-field/div/div[1]/div/input', '000000000')
    I.wait(1)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/button[1]')
    I.waitForText('Endereço código 0 não localizado!')
    I.wait(3)


}).tag('107-04');

// // // //-------------------------------

Scenario('107-05 Transferencia de produto por Unidade Válido ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')

    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU AGUARDO
    I.wait(2)
    //EU AGUARDO
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    I.wait(1)
    I.waitForText('Dt.Fabricacao:')
    I.waitForText('Lote:')
    //EU ADICIONO o CD BARRA SOMAR 7898493996633 EM 'CD DE BARRAS SOMAR'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/button[1]')
    I.wait(2)
    //EU ADICIONE '1' EM QUANTIDADE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[1]/div/div[1]/div/input', '1')
    I.wait(2)
    //EU CLICO NO BOTAO SOMAR
    I.click('SOMAR')
    I.wait(2)
    //EU ADICIONO AO ENDEREÇO DE DESTINO O ID 1000121199293 QUE É PEND.ARMAZENAMENTO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/mat-form-field/div/div[1]/div/input', CdBarraDestino)
    I.wait(2)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/button[1]')
    I.wait(2)
    //EU CLICO NO BOTAO 'CONFIRMAR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[9]/button[1]')
    I.wait(2)
    //EU CLICO NO BOTAO 'SIM'
    I.click('SIM')
    I.wait(2)
    //EU ESPERO PELA MENSAGEM 'Transferência realizada com sucesso!'
    I.waitForText('Transferência realizada com sucesso!')
    I.wait(3)


}).tag('107-05');



Scenario('107-06 Transferencia de produto por Caixa - válido ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')

    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraCaixa)
    //EU AGUARDO
    I.wait(2)
    //EU AGUARDO
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    I.wait(2)
    I.waitForText('Dt.Validade:')
    I.waitForText('Dt.Fabricacao:')
    I.waitForText('Lote:')
    //EU ADICIONO o CD BARRA SOMAR 12345 EM 'CD DE BARRAS SOMAR'
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/mat-form-field/div/div[1]/div/input', CdBarraCaixa)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[5]/button[1]')
    I.wait(2)
    //EU ADICIONE '1' EM QUANTIDADE SO QUE EM CAIXA
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[1]/div/div[1]/div/input', '1')
    //EU CLICO NA CAIXA PARA MUDAR SE QUERO UNIDADE OU CAIXA
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[2]')
    //SELECIONO 'CX -25'
    I.click('/html/body/div[3]/div[2]/div/div/div/mat-option[1]')
    // EU CLICO NO BOTAO SOMAR
    I.click('SOMAR')
    //EU ADICIONO AO ENDEREÇO DE DESTINO O ID 1000121199293 QUE É PEND.ARMAZENAMENTO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/mat-form-field/div/div[1]/div/input', '1000121199293')
    I.wait(1)
    //EU CLICO NO BOTAO PARA ADICIONAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/button[1]')
    //EU CLICO NO BOTAO 'CONFIRMAR'
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[9]/button[1]')
    //EU CLICO NO BOTAO 'SIM'
    I.click('SIM')
    I.wait(4)
    //EU ESPERO PELA MENSAGEM 'Transferência realizada com sucesso!'
    I.waitForText('Transferência realizada com sucesso!')
    I.wait(3)


}).tag('107-06');

Scenario('107-07 Verificando destino válido ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')
 
    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraDestino)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU AGUARDO
    I.wait(2)
    //EU AGUARDO
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    I.wait(5)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[4]/div/button')
    I.wait(5)
    I.waitForText('52.0000-UN')
    I.click('OK')

}).tag('107-07');

Scenario('107-08 Retornando Transferencia válido ', () => {

    //EU VOU PARA A PAGINA 'TRANSFERENCIA DE ESTOUQE'
    vouParaAbaPage.IrParaPagina('https://192.168.1.128:9090/flextotal/user/estoque/transferencia/home/transferencia')

    //EU COLOCO O CODIGO DE ORIGEM CORRETO
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/mat-form-field/div/div[1]/div/input', CdBarraDestino)
    //EU CLICO NO BOTAO PARA CONTINUAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[1]/button[1]')
    //EU COLOCO O CD DE BARRAS DO PRODUTO PRA VERIFICAR SE CHEGOU NESSA PARTE
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/mat-form-field/div/div[1]/div/input', CdBarraUnidade)
    //EU CLICO NO BOTAO PRA ENTRAR
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[3]/button[1]')
    //EU AGUARDO
    I.wait(3)
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[6]/mat-form-field[1]/div/div[1]/div/input', '52')
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/button[1]')
    I.click('SOMAR')
    I.fillField('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/mat-form-field/div/div[1]/div/input', CdBarraOrigem)
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[7]/button[1]')
    I.click('/html/body/my-app/home/mat-sidenav-container/mat-sidenav-content/trasnferencia-estoque-home/transferencia-estoque-component/div/form/div[9]/button[1]')
    I.click('SIM')
    I.waitForText('Transferência realizada com sucesso!')

}).tag('107-08');



