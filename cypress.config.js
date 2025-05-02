const { defineConfig } = require("cypress");


module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'ddmmyyyy_HHMMss',
    includeScreenshots: true,
    embeddedScreenshots: true,
    charts: true
    },
  e2e: {
    baseUrl: "https://todomvc.com/examples/react/dist/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
