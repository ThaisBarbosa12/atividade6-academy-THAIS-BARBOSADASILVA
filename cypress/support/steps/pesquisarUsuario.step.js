import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import PesquisarUsuarioPage from "../pages/pesquisarUsuario.page";
const paginaPesquisarUsuario = new PesquisarUsuarioPage();
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

Given("que possuo um usuario cadastrado", function () {
  cy.get("@usuarioCadastrado");
});

Given("que acessei a funcionalidade de buscar usuarios", function () {
  cy.visit("/users");
});

Given("preencho o campo de busca com o valor {string}", function (valor) {
  paginaPesquisarUsuario.typeBuscarNome(valor);
});

When("buscar o usuario pelo nome", function () {
  paginaPesquisarUsuario.typeBuscarNome(name);
});

When("buscar um usuario cadastrado pelo email", function () {
  paginaPesquisarUsuario.typeBuscarEmail(email);
});

When("buscar o usuario pelo nome inválido {string}", function (nome) {
  paginaPesquisarUsuario.typeBuscarNome(nome);
});

When("acessar a funcionalidade de ver detalhes", function () {
  paginaPesquisarUsuario.clickButtonVerDetalhes();
});

When("selecionar o X existente no campo", function () {
  paginaPesquisarUsuario.clickButtonXInput();
});

Then("terei acesso a todas as informações usuario", function () {
  cy.get(paginaPesquisarUsuario.detalheId).should("be.visible");
  cy.get(paginaPesquisarUsuario.detalheNome).should("be.visible");
  cy.get(paginaPesquisarUsuario.detalheEmail).should("be.visible");
});

Then(
  "o sistema retorna a mensagem: Ops! Não existe nenhum usuário para ser exibido, cadastre um novo usuário",
  function () {
    cy.get(paginaPesquisarUsuario.headerUsuarioNaoEncontrado).should(
      "be.visible"
    );
    cy.get(paginaPesquisarUsuario.headerUsuarioNaoEncontrado).should(
      "contain.text",
      "Ops! Não existe nenhum usuário para ser exibido."
    );
    cy.get(paginaPesquisarUsuario.headerCadastrarUsuario).should("be.visible");
    cy.get(paginaPesquisarUsuario.headerCadastrarUsuario).should(
      "contain.text",
      "Cadastre um novo usuário"
    );
  }
);

Then("o valor preenchido deverá ser limpo", function (valor) {
  cy.get(paginaPesquisarUsuario.inputBuscar).should("not.contain.text", valor);
});

Then("o campo de busca deverá estar vazio", function () {
  cy.get(paginaPesquisarUsuario.inputBuscar).should("contain.text", "");
});
