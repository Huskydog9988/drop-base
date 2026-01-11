// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-01-09",

  modules: ["@nuxt/eslint"],

  typescript: {
    typeCheck: true,

    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
        strictNullChecks: true,
        exactOptionalPropertyTypes: false,
        allowImportingTsExtensions: false,
      },
    },
  },
});
