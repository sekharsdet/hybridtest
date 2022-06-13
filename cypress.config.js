const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin-advertisement.herokuapp.com/advertisements',
    specPattern: "cypress/e2e/**/*.spec.js",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true
    },
    "video": false
  },
});
