const groupPage = require("./pages/groupPage");
const homePage = require("./pages/homePage");
const identificationPage = require("./pages/identificationPage");
const resumePage = require("./pages/resumePage");

describe("unidas reservation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Validar início de reserva", () => {
    homePage.selecionaLocalRetirada("Copacabana");
    homePage.selecionaDataDaReserva();
    homePage.clicaEmAlugar();
    groupPage.tituloPaginaExibido();
  });

  it("Validar seleção de grupo de veículos", () => {
    homePage.selecionaLocalRetirada("Copacabana");
    homePage.selecionaDataDaReserva();
    homePage.clicaEmAlugar();
    groupPage.selecionarRetiradaPrimeiroGrupo();
    resumePage.tituloPaginaExibido();
  });

  it("Validar seleção de proteções e serviços de veículos", () => {
    homePage.selecionaLocalRetirada("Copacabana");
    homePage.selecionaDataDaReserva();
    homePage.clicaEmAlugar();
    groupPage.selecionarRetiradaPrimeiroGrupo();
    resumePage.selecionarAlgumasProtecoes();
    resumePage.selecionarServicoBebeConforto();
    resumePage.clicarBotaoAvancar();
    identificationPage.tituloPaginaExibido();
  });
});
