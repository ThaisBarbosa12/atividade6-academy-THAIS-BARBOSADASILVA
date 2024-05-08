import {
  Given,
  When,
  Then,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import ListarUsuariosPage from "../pages/listarUsuarios.page";
const paginaListarUsuario = new ListarUsuariosPage();

Before({ tags: "@lista6Usuarios" }, () => {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "mock/listaCom6Usuarios.json",
  }).as("get6Usuarios");
});

Before({ tags: "@lista4Paginas" }, () => {
  cy.intercept("GET", "/api/v1/users", {
    statusCode: 200,
    fixture: "mock/lista4Paginas.json",
  }).as("get4Paginas");
});

Before({ tags: "@listaVazia" }, () => {
  cy.intercept("GET", "api/v1/users", { statuscode: 200, body: [] }).as(
    "listaVazia"
  );
});

Given("que acessei a funcionalidade de listar usuarios", function () {
  cy.visit("/users");
});

When("visualizar a lista com todos usuários", function () {
  paginaListarUsuario.getTodosUsuarios().should("be.visible");
});

When("visualizar uma lista vazia de usuarios", function () {
  cy.wait("@listaVazia");
  cy.get("h3").should("be.visible");
});

Then(
  "terei acesso as informações de nome e email de todos os usuarios",
  function () {
    cy.wait("@get6Usuarios").then(function (consultaUsuarios) {
      const listaUsuarios = consultaUsuarios.response.body;
      listaUsuarios.forEach((usuario) => {
        cy.contains(paginaListarUsuario.nomeUsuario, "Nome: " + usuario.name);
        cy.contains(
          paginaListarUsuario.emailUsuario,
          "E-mail: " + usuario.email.slice(0, 21)
        );
      });
      cy.get(paginaListarUsuario.paginacaoAtual).should(
        "contain.text",
        "1 de 1"
      );
      cy.get(paginaListarUsuario.buttonAvançar).should("be.disabled");
      cy.get(paginaListarUsuario.buttonAnterior).should("be.disabled");
    });
  }
);

Then(
  "o sistema retorna a mensagem: não existem usuarios para serem exibidos, cadastre um novo usuário",
  function () {
    cy.get(paginaListarUsuario.headerUsuarioNaoCadastro).should("be.visible");
    cy.get(paginaListarUsuario.headerUsuarioNaoCadastro).should(
      "contain.text",
      "Ops! Não existe nenhum usuário para ser exibido."
    );
    cy.get(paginaListarUsuario.headerCadastrarNovoUsuario).should("be.visible");
    cy.get(paginaListarUsuario.headerCadastrarNovoUsuario).should(
      "contain.text",
      "Cadastre um novo usuário"
    );
  }
);

Then(
  "devem estar visiveis as opções para ver detalhes e excluir os usuarios",
  function () {
    cy.wait("@get6Usuarios").then(function (lista6Usuarios) {
      const listaUsuarios = lista6Usuarios.response.body;
      listaUsuarios.forEach(() => {
        cy.get(paginaListarUsuario.buttonLixeira).should("be.visible");
        cy.get(paginaListarUsuario.buttonVerDetalhes).should("be.visible");
      });
    });
  }
);

Then(
  "devem estar habilitadas as funções de avançar e retornar entre as páginas",
  function () {
    cy.wait("@get4Paginas").then((listaQuatroPaginas) => {
      const quantidadeUsuarios = listaQuatroPaginas.response.body.length;
      const quantidadePaginas = Math.floor(quantidadeUsuarios / 6);
      for (var i = 1; i < quantidadePaginas; i++) {
        paginaListarUsuario.clickButtonAvançar();
      }
      cy.contains(paginaListarUsuario.paginacaoAtual, "4 de 4");
      cy.get(paginaListarUsuario.buttonAvançar).should("be.disabled");
      cy.get(paginaListarUsuario.buttonAnterior).should("be.enabled");

      for (var i = 1; i < quantidadePaginas; i++) {
        paginaListarUsuario.clickButtonAnterior();
      }
      cy.contains(paginaListarUsuario.paginacaoAtual, "1 de 4");
      cy.get(paginaListarUsuario.buttonAvançar).should("be.enabled");
      cy.get(paginaListarUsuario.buttonAnterior).should("be.disabled");
    });
  }
);

Then(
  "as funções de avançar e retornar paginas devem estar desabilatadas",
  function () {
    cy.wait("@get6Usuarios");
    cy.get(paginaListarUsuario.buttonAvançar).should("be.disabled");
    cy.get(paginaListarUsuario.buttonAnterior).should("be.disabled");
    cy.contains(paginaListarUsuario.paginacaoAtual, "1 de 1");
  }
);
