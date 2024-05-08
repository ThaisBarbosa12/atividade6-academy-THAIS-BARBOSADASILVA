import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import CriarUsuarioPage from "../pages/criarUsuario.page";
import { faker } from "@faker-js/faker";
const paginaCriação = new CriarUsuarioPage();

Before({ tags: "@usuarioExistente" }, () => {
  cy.intercept("POST", "api/v1/users", {
    statusCode: 422,
    fixture: "mock/bodyErroEmailExistente.json",
  }).as("userExistente");
});

Given("que acessei a funcionalidade de cadastro", function () {
  cy.visit("/users/novo");
});

When("informar o nome", function () {
  paginaCriação.typeNome(faker.person.firstName() + " teste");
});

When("informar o e-mail", function () {
  paginaCriação.typeEmail(faker.internet.email());
});

When("salvar a operação", function () {
  paginaCriação.clickButtonSalvar();
});

When("informar o e-mail invalido {string}", function (email) {
  paginaCriação.typeEmail(email);
});

When("informar o e-mail já utilizado {string}", function (email) {
  paginaCriação.typeEmail(email);
});

When(
  "informar um nome com mais de {int} caracteres {string}",
  function (tamanho, nome) {
    paginaCriação.typeNome(nome);
  }
);

When(
  "informar o e-mail com mais de {int} caracteres {string}",
  function (tamanho, email) {
    paginaCriação.typeEmail(email);
  }
);

When("informar o nome com menos de 4 letras {string}", function (nome) {
  paginaCriação.typeNome(nome);
});

Then("o sistema retorna o alerta de usuário salvo com sucesso", function () {
  cy.get(".go3958317564").should("be.visible");
  cy.get(".go3958317564").should("contain.text", "Usuário salvo com sucesso!");
});

Then(
  "o sistema retorna a mensagem de erro informando que o formato de e-mail é invalido",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should("contain.text", "Formato de e-mail inválido");
  }
);

Then(
  "o sistema retorna o alerta este e-mail já é utilizado por outro usuário",
  function () {
    cy.wait("@userExistente");
    cy.get("h2").should("be.visible");
    cy.get("h2").should("contain.text", "Erro");
    cy.get("p").should("be.visible");
    cy.get("p").should(
      "contain.text",
      "Este e-mail já é utilizado por outro usuário."
    );
    cy.get(".sc-lcIPJg").should("be.visible");
  }
);

Then(
  "o sistema não permite concluir o cadastro ao extrapolar o limite de {int} caracteres no campo nome",
  function (tamanhomáximo) {
    cy.get(paginaCriação.inputNome)
      .invoke("val")
      .then((emailDigitado) => {
        expect(emailDigitado.length).to.equal(tamanhomáximo + 1);
      });
  }
);

Then(
  "retorna a mensagem dizendo que deve ser informado no máximo {int} caracteres para o nome",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should(
      "contain.text",
      "Informe no máximo 100 caracteres para o nome"
    );
  }
);

Then(
  "o sistema não permite concluir o cadastro ao extrapolar o limite de {int} caracteres no campo e-mail",
  function (tamanhomáximo) {
    cy.get(paginaCriação.inputEmail)
      .invoke("val")
      .then((emailDigitado) => {
        expect(emailDigitado.length).to.equal(tamanhomáximo + 1);
      });
  }
);

Then(
  "retorna a mensagem dizendo que deve ser informado no máximo {int} caracteres para o email",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should(
      "contain.text",
      "Informe no máximo 60 caracteres para o e-mail"
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo que deve ser informado no mínimo 4 caracteres para o nome",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should(
      "contain.text",
      "Informe pelo menos 4 letras para o nome"
    );
  }
);

Then(
  "o sistema retorna a mensagem dizendo o campo nome é obrigatório",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should("contain.text", "O campo nome é obrigatório.");
  }
);

Then(
  "o sistema retorna a mensagem dizendo o campo e-mail é obrigatório",
  function () {
    cy.get(".sc-cPiKLX").should("be.visible");
    cy.get(".sc-cPiKLX").should(
      "contain.text",
      "O campo e-mail é obrigatório."
    );
  }
);
