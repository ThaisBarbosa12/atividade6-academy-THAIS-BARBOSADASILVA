const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://rarocrud-frontend-88984f6e4454.herokuapp.com",
    apiBaseUrl: "https://rarocrud-80bf38b38f1f.herokuapp.com/api-docs/",
    TAGS: "not @ignore",
    TAGS: "@test or @usuarioExistente",
    TAGS: "@lista6Usuarios or @listaVazia or @lista4Paginas or @CriarUsuario",
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
  },
});
