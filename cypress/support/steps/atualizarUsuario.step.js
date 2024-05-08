import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import AtualizarUsuarioPage from "../pages/atualizarUsuario.page";
const paginaAtualizarUsuario = new AtualizarUsuarioPage();
const name = faker.person.firstName() + " teste";
const email = faker.internet.email();

Before({ tags: "@CriarUsuario" }, () => {
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
  paginaAtualizarUsuario.typeBuscar(name);
  paginaAtualizarUsuario.clickButtonVerDetalhes();
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

When(
  "alterar o campo email para um email {string} com formato invalido",
  function (email) {
    cy.get(paginaAtualizarUsuario.detalheEmail).clear();
    paginaAtualizarUsuario.typeAtualizarEmail(email);
  }
);

When("selecionar a função salvar", function () {
  paginaAtualizarUsuario.clickButtonSalvar();
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
