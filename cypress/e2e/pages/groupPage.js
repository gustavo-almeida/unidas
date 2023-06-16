class groupPage {
  elements = {
    title: () => cy.contains("Escolha seu grupo de veículos"),
  };

  tituloPaginaExibido() {
    this.elements.title();
  }
}

module.exports = new groupPage();
