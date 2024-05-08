export default class PesquisarUsuarioPage {
  inputBuscar = ".sc-gsFSXq";
  LupaCampoInput = ".sc-dcJsrY > :nth-child(1)";
  xCampoInput = ".sc-dcJsrY > :nth-child(3)";
  listaUsuarios = "#listaUsuarios";
  listaComTodosUsuarios = "#listaUsuarios #userData";
  paginacaoAtual = "#paginacaoAtual";

  buttonAnterior = "#paginacaoVoltar";
  buttonAvançar = "#paginacaoProximo";
  buttonLixeira = '[data-test="userDataDelete"]';
  buttonVerDetalhes = ".sc-feUZmu > #userDataDetalhe";

  detalheId = '[name="id"]';
  detalheNome = "#userName";
  detalheEmail = "#userEmail";

  headerUsuarioNaoEncontrado = "h3";
  headerCadastrarUsuario = "p";

  nomeUsuario = '[data-test="userDataName"]';
  emailUsuario = '[data-test="userDataEmail"]';

  linkNovo = '[href="/users/novo"]';
  linkVoltar = '[href="/users"]';

  typeBuscarNome(nome) {
    cy.get(this.inputBuscar).type(nome);
  }
  typeBuscarEmail(email) {
    cy.get(this.inputBuscar).type(email);
  }
  clickButtonXInput() {
    cy.get(this.xCampoInput).click();
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
