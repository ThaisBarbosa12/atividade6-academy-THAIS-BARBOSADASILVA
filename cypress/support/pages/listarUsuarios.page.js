export default class ListarUsuariosPage {
  listaUsuarios = "#listaUsuarios";
  listaComTodosUsuarios = "#listaUsuarios #userData";
  paginacaoAtual = "#paginacaoAtual";

  buttonAnterior = "#paginacaoVoltar";
  buttonAvançar = "#paginacaoProximo";
  buttonLixeira = '[data-test="userDataDelete"]';
  buttonVerDetalhes = ".sc-feUZmu > #userDataDetalhe";

  headerUsuarioNaoCadastro = "h3";
  headerCadastrarNovoUsuario = "p";

  nomeUsuario = '[data-test="userDataName"]';
  emailUsuario = '[data-test="userDataEmail"]';

  linkNovo = '[href="/users/novo"]';
  linkVoltar = '[href="/users"]';

  getTodosUsuarios() {
    return cy.get(this.listaComTodosUsuarios);
  }
  clickButtonAnterior() {
    cy.get(this.buttonAnterior).click();
  }
  clickButtonAvançar() {
    cy.get(this.buttonAvançar).click();
  }
  clickButtonLixeira() {
    cy.get(this.buttonLixeira).click();
  }
  clickButtonVerDetalhes() {
    cy.get(this.buttonVerDetalhes).click();
  }
}
