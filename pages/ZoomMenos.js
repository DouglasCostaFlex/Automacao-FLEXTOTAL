const { I } = inject();

module.exports = {

  
   ZoomMenos() {
    // Utilizando a função I.touchPerform() para executar o scroll
   I.executeScript(() => {
        document.body.style.zoom = '70%';

      });
  }
  
}
