export default class CriarUsuarioPage {
  inputNome = "#name";
  inputEmail = "#email";
  buttonSalvar = ".sc-kpDqfm";

  linkVoltar = '[href="/users/novo"]';

  alertaUsuarioCriado = ".go3958317564";
  erroEmail = ".sc-cPiKLX";
  erroNome = ".sc-cPiKLX";
  alertaErro = "h2";
  alertaEmailEmUso = "p";
  buttonCancelarErro = ".sc-lcIPJg";

  typeNome(nome) {
    cy.get(this.inputNome).type(nome);
  }

  typeEmail(email) {
    cy.get(this.inputEmail).type(email);
  }

  clickButtonSalvar() {
    cy.get(this.buttonSalvar).click();
  }

  clickButtonVoltar() {
    cy.get(this.linkVoltar).click();
  }

  cadastrar(nome, email) {
    this.typeNome(nome);
    this.typeEmail(email);
    this.clickButtonSalvar();
  }
}
