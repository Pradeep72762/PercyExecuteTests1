const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  //reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure = true;
      //require('cypress-mochawesome-reporter/plugin')(on);
    },    
  experimentalSessionAndOrigin: true,
  //chromeWebSecurity: false
  },
});


