import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import AtualizarUsuarioPage from "../pages/atualizarUsuario.page";
const paginaAtualizarUsuario = new AtualizarUsuarioPage();

Before({ tags: "@EmailEmUso" }, () => {
  var nameEmUso = faker.person.firstName() + " emUso";
  var emailEmUso = faker.internet.email().toLowerCase();
  cy.request({
    method: "POST",
    url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    body: {
      name: nameEmUso,
      email: emailEmUso,
    },
  }).as("usuarioEmailEmUso");
});

Before({ tags: "@CriarUsuario" }, () => {
  var name = faker.person.firstName() + " teste";
  var email = faker.internet.email();
  cy.request({
    method: "POST",
    url: "https://rarocrud-80bf38b38f1f.herokuapp.com/api/v1/users",
    body: {
      name: name,
      email: email,
    },
  }).as("usuarioCadastrado");
});

Given(
  "que possuo um usuario cadastrado e acessei funcionalidade de buscar usuarios",
  function () {
    cy.visit("/users");
  }
);

Given("encontrei o usuario e selecionei a função de ver detalhes", function () {
  cy.get("@usuarioCadastrado").then(function (usuario) {
    paginaAtualizarUsuario.typeBuscar(usuario.body.name);
    paginaAtualizarUsuario.clickButtonVerDetalhes();
  });
});

Given("selecionei a função editar", function () {
  paginaAtualizarUsuario.clickButtonEditar();
});

When(
  "alterar os valores dos campos de nome e email com dados validos",
  function () {
    const nomefaker = faker.person.firstName() + " qatest";
    const emailfaker = faker.internet.email();
    cy.get(paginaAtualizarUsuario.detalheNome).clear();
    paginaAtualizarUsuario.typeAtualizarNome(nomefaker);
    cy.get(paginaAtualizarUsuario.detalheEmail).clear();
    paginaAtualizarUsuario.typeAtualizarEmail(emailfaker);
  }
);

When("selecionar a função salvar", function () {
  paginaAtualizarUsuario.clickButtonSalvar();
});

When(
  "alterar o campo email para um email {string} com formato invalido",
  function (email) {
    cy.get(paginaAtualizarUsuario.detalheEmail).clear();
    paginaAtualizarUsuario.typeAtualizarEmail(email);
  }
);

When(
  "alterar o campo nome para um nome {string} com formato invalido",
  function (name) {
    cy.get(paginaAtualizarUsuario.detalheNome).clear();
    paginaAtualizarUsuario.typeAtualizarNome(name);
  }
);

When(
  "alterar o campo nome para um nome com mais de {int} caracteres {string}",
  function (tamanho, nome) {
    cy.get(paginaAtualizarUsuario.detalheNome).clear();
    paginaAtualizarUsuario.typeAtualizarNome(nome);
  }
);

When(
  "alterar o campo nome para um nome com {int} caracteres {string}",
  function (tamanho, nome) {
    cy.get(paginaAtualizarUsuario.detalheNome).clear();
    paginaAtualizarUsuario.typeAtualizarNome(nome);
  }
);

When(
  "alterar o campo email para um para um email com mais de {int} caracteres {string}",
  function (tamanho, email) {
    cy.get(paginaAtualizarUsuario.detalheEmail).clear();
    paginaAtualizarUsuario.typeAtualizarEmail(email);
  }
);

When(
  "alterar o campo email para um para um email com {int} caracteres",
  function () {
    var email = faker.internet.email();
    var email60Chars = email.padEnd(60, "x");
    cy.get(paginaAtualizarUsuario.detalheEmail).clear();
    paginaAtualizarUsuario.typeAtualizarEmail(email60Chars);
  }
);

When(
  "alterar o campo email para um email já cadastrado por outro usuario",
  function () {
    cy.get("@usuarioEmailEmUso").then(function (usuario) {
      cy.get(paginaAtualizarUsuario.detalheEmail).clear();
      paginaAtualizarUsuario.typeAtualizarEmail(usuario.body.email);
    });
  }
);

When("informar o nome com {int} letras {string}", function (tamanho, nome) {
  cy.get(paginaAtualizarUsuario.detalheNome).clear();
  paginaAtualizarUsuario.typeAtualizarNome(nome);
});

When("informar o nome com menos de 4 letras {string}", function (nome) {
  cy.get(paginaAtualizarUsuario.detalheNome).clear();
  paginaAtualizarUsuario.typeAtualizarNome(nome);
});

When("limpar o campo nome", function () {
  cy.get(paginaAtualizarUsuario.detalheNome).clear();
});

When("limpar o campo email", function () {
  cy.get(paginaAtualizarUsuario.detalheEmail).clear();
});

When("buscar pelo usuario {string} e nao encontrá-lo", function (nomeInvalido) {
  paginaAtualizarUsuario.typeBuscar(nomeInvalido);
});

Then(
  "o sistema retorna o alerta de informações atualizadas com sucesso",
  function () {
    cy.get(paginaAtualizarUsuario.alertaUsuarioAtualizado).should("be.visible");
    cy.get(paginaAtualizarUsuario.alertaUsuarioAtualizado).should(
      "contain.text",
      "Informações atualizadas com sucesso!"
    );
  }
);

Then(
  "Então o sistema retorna a mensagem de erro informando que o formato de e-mail é invalido",
  function () {
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should(
      "contain.text",
      "Formato de e-mail inválido"
    );
  }
);

Then(
  "o sistema retorna a mensagem de erro informando que o formato de nome é invalido",
  function () {
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should(
      "contain.text",
      "Formato do nome é inválido."
    );
  }
);

Then(
  "o sistema retorna a mensagem: não existem usuarios para serem exibidos, cadastre um novo usuário",
  function () {
    cy.get(paginaAtualizarUsuario.headerUsuarioNaoEncontrado).should(
      "be.visible"
    );
    cy.get(paginaAtualizarUsuario.headerUsuarioNaoEncontrado).should(
      "contain.text",
      "Ops! Não existe nenhum usuário para ser exibido."
    );
    cy.get(paginaAtualizarUsuario.headerCadastrarUsuario).should("be.visible");
    cy.get(paginaAtualizarUsuario.headerCadastrarUsuario).should(
      "contain.text",
      "Cadastre um novo usuário"
    );
  }
);

Then(
  "o sistema retorna o alerta este e-mail já é utilizado por outro usuário",
  function () {
    cy.get(paginaAtualizarUsuario.headerErro).should("be.visible");
    cy.get(paginaAtualizarUsuario.headerErro).should("contain.text", "Erro");
    cy.get(paginaAtualizarUsuario.headerEmailEmUso).should("be.visible");
    cy.get(paginaAtualizarUsuario.headerEmailEmUso).should(
      "contain.text",
      "Este e-mail já é utilizado por outro usuário."
    );
    cy.get(paginaAtualizarUsuario.headerCancelar).should("be.visible");
  }
);

Then(
  "o sistema retorna a mensagem dizendo que deve ser informado no máximo {int} caracteres para o nome",
  function () {
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should(
      "contain.text",
      "Informe no máximo 100 caracteres para o nome"
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo que deve ser informado no máximo {int} caracteres para o email",
  function () {
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should(
      "contain.text",
      "Informe no máximo 60 caracteres para o e-mail"
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo que deve ser informado no mínimo {int} caracteres para o nome",
  function () {
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should(
      "contain.text",
      "Informe pelo menos 4 letras para o nome"
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo o campo nome é obrigatório",
  function () {
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoNomeInvalido).should(
      "contain.text",
      "O campo nome é obrigatório."
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo o campo email é obrigatório",
  function () {
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should("be.visible");
    cy.get(paginaAtualizarUsuario.formatoEmailInvalido).should(
      "contain.text",
      "O campo e-mail é obrigatório."
    );
  }
);
