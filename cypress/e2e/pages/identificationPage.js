class identificationPage {
  elements = {
    title: () => cy.contains("Confira e finalize sua reserva"),
  };

  tituloPaginaExibido() {
    this.elements.title();
  }
}

module.exports = new identificationPage();
