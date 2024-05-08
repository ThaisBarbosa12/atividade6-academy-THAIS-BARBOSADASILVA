export default class CriarUsuarioPage {
  inputNome = "#name";
  inputEmail = "#email";
  buttonSalvar = ".sc-kpDqfm";

  linkVoltar = '[href="/users/novo"]';

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
