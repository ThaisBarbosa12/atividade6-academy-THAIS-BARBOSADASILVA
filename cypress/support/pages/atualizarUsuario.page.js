export default class AtualizarUsuarioPage {
  inputBuscar = ".sc-gsFSXq";
  listaUsuarios = "#listaUsuarios";
  listaComTodosUsuarios = "#listaUsuarios #userData";

  buttonVerDetalhes = ".sc-feUZmu > #userDataDetalhe";
  buttonEditar = '[type="button"]';
  buttonSalvar = '[type="submit"]';

  detalheId = '[name="id"]';
  detalheNome = "#userName";
  detalheEmail = "#userEmail";

  headerUsuarioNaoEncontrado = "h3";
  headerCadastrarUsuario = "p";

  alertaUsuarioAtualizado = ".go3958317564";
  formatoNomeInvalido = ".sc-cPiKLX feFrSQ";
  formatoEmailInvalido = ".sc-cPiKLX feFrSQ";

  typeAtualizarNome(nome) {
    cy.get(this.detalheNome).type(nome);
  }

  typeAtualizarEmail(email) {
    cy.get(this.detalheEmail).type(email);
  }

  typeBuscar(dados) {
    cy.get(this.inputBuscar).type(dados);
  }

  clickButtonEditar() {
    cy.get(this.buttonEditar).click();
  }

  clickButtonSalvar() {
    cy.get(this.buttonSalvar).click();
  }

  clickButtonVerDetalhes() {
    cy.get(this.buttonVerDetalhes).click();
  }
}
