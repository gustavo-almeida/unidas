class resumePage {
  elements = {
    title: () => cy.contains("Resumo da reserva"),
    selectCarbonoNeutro: () =>
      cy.get(
        "app-accessorie-box.ng-star-inserted > .protection-box > .head > .selection"
      ),
    selectProtecaoTerceiros: () =>
      cy.get(":nth-child(7) > .protection-box > .head > .selection"),
    selectServicoBebeConforto: () =>
      cy.get(":nth-child(6) > .accessorie-box > .content > .selection"),
    buttonAvancar: () => cy.get(".resume-action"),
  };

  tituloPaginaExibido() {
    this.elements.title();
  }

  selecionarCarbonoNeutro() {
    this.elements.selectCarbonoNeutro().click();
  }

  selecionarProtecaoTerceiros() {
    this.elements.selectProtecaoTerceiros().click();
  }

  selecionarServicoBebeConforto() {
    this.elements.selectServicoBebeConforto().click();
  }

  selecionarAlgumasProtecoes() {
    this.selecionarCarbonoNeutro();
    this.selecionarProtecaoTerceiros();
  }

  clicarBotaoAvancar() {
    this.elements.buttonAvancar().click();
  }
}

module.exports = new resumePage();
