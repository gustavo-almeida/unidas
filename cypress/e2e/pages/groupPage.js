class groupPage {
  elements = {
    title: () => cy.contains("Escolha seu grupo de veículos"),
    firstGroupRetiradaOption: () =>
      cy.get(
        ':nth-child(1) > app-new-car-box.ng-star-inserted > :nth-child(1) > .card > .card__footer > :nth-child(1) > [data-qa="card-0"]'
      ),
  };

  tituloPaginaExibido() {
    this.elements.title();
  }

  selecionarRetiradaPrimeiroGrupo() {
    this.elements.firstGroupRetiradaOption().click();
  }
}

module.exports = new groupPage();
