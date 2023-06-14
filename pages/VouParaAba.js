const { I } = inject();

 async function IrParaPagina(link) {

  I.amOnPage(link);
  I.wait(5);
  tryTo(I.acceptPopup)
 }
module.exports = {
  IrParaPagina
};