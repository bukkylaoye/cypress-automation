const { defineConfig } = require('Cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for local reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on); //for local reports
    },
  },
});
