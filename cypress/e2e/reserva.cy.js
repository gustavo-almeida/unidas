const groupPage = require("./pages/groupPage");
const homePage = require("./pages/homePage");

describe("unidas reservation", () => {
  before(() => {
    cy.visit("/");
  });

  it("iniciar reserva", () => {
    homePage.selecionaLocalRetirada("Copacabana");
    homePage.selecionaDataDaReserva();
    homePage.clicaEmAlugar();
    groupPage.tituloPaginaExibido();
  });
});
