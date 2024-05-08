export default class AtualizarUsuarioPage {
  inputBuscar = ".sc-gsFSXq";
  listaUsuarios = "#listaUsuarios";
  listaComTodosUsuarios = "#listaUsuarios #userData";

  buttonVerDetalhes = "#userDataDetalhe";
  buttonEditar = '[type="button"]';
  buttonSalvar = '[type="submit"]';

  detalheId = '[name="id"]';
  detalheNome = "#userName";
  detalheEmail = "#userEmail";

  headerErro = "h2";
  headerEmailEmUso = "p";
  buttonCancelar = ".sc-lcIPJg";
  headerUsuarioNaoEncontrado = "h2";
  headerUsuarioNaoLocalizado = "p";
  headerCadastrarUsuario = "p";

  alertaUsuarioAtualizado = ".go3958317564";
  formatoNomeInvalido = ".sc-cPiKLX";
  formatoEmailInvalido = ".sc-cPiKLX";

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
