const homePage = require("./pages/homePage");

describe("template spec", () => {
  before(() => {
    cy.visit("/");
  });

  it("reserva veículo", () => {
    homePage.selecionaLocalRetirada("Copacabana");
    homePage.selecionaDataDaReserva();
    homePage.clicaEmAlugar();
  });
});
