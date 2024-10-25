const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },
});
