class homePage {
  elements = {
    inputRetirada: () => cy.get('[data-qa="input-local"]'),
    listRetirada: () => cy.get(".ng-scroll-content > ul"),
    optionDataRetirada: () => cy.get("#date-out"),
    optionHoraRetirada: () => cy.get(".clickHourOut"),
    optionDataDevolucao: () => cy.get("#date-dev"),
    optionHoraDevolucao: () => cy.get(".clickHourDev"),
    diaAleatorioRetiradaFuturo: () =>
      cy.get(":nth-child(5) > :nth-child(7) > .p-ripple > .day-box"),
    primeiroHorarioRetiradaFuturo: () => cy.get(".hours-list li").first(),
    diaAleatorioDevolucaoFuturo: () =>
      cy.get(
        ":nth-child(2) > .p-datepicker-calendar-container > .p-datepicker-calendar > tbody.ng-tns-c29-1 > :nth-child(2) > :nth-child(1) > .p-ripple > .day-box"
      ),
    primeiroHorarioDevolucaoFuturo: () => cy.get(".hours-list li").first(),
    buttonAlugar: () => cy.get(".col-lg-2 > app-button"),
  };

  selecionaLocalRetirada(local) {
    this.elements.inputRetirada().type(local);
    this.elements.listRetirada().first().click();
  }

  selecionaDataDaReserva() {
    this.elements.diaAleatorioRetiradaFuturo().click();
    this.elements.primeiroHorarioRetiradaFuturo().click();
    this.elements.diaAleatorioDevolucaoFuturo().click();
    this.elements.primeiroHorarioDevolucaoFuturo().click();
  }

  clicaEmAlugar() {
    this.elements.buttonAlugar().click();
  }
}

module.exports = new homePage();
