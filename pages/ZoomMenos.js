const { I } = inject();

module.exports = {

  
  async ZoomMenos() {
    // Utilizando a função I.touchPerform() para executar o scroll
    await I.executeScript(() => {
        document.body.style.zoom = '70%';
      });
  }
  
}
