import { defineConfig } from "cypress";

const baseUrl = "http://localhost:5173";

export default defineConfig({
  env: {
    login_url: `${baseUrl}/login`,
    admin_validation_url: `${baseUrl}/admin/validation`,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
