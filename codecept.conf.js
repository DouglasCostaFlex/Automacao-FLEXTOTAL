const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
//CONFIGURAR PROJETO
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://192.168.1.128:9090/flextotal/login',
      browser: 'chrome',
      restart: false
    },

    "ResembleHelper" : {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder" : "./tests/output/",
      "baseFolder": "./tests/screenshots/base/",
      "diffFolder": "./tests/screenshots/diff/"
    }

  },

  // API tresults PARA CONTROLAR OS RELATÓRIOS
  // plugins: {
  //   'tesults': {
  //     'require': 'codeceptjs-tesults',
  //     'enabled': true,
  //     'target': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU0ODc5NDIyLTNlODYtNDA3Ny1iZTMyLWI2Y2EzMjcyMmMzYiIsImV4cCI6NDEwMjQ0NDgwMDAwMCwidmVyIjoiMCIsInNlcyI6 IjI5ZTljMjcwLTY4YWYtNGVhYy04NDUxLTRiYTU3N2IyNWQ3ZCIsInR5cGUiOiJhcCJ9.Gx-1XHWmnRN4dLhEbBRHsMYX_xGzqMkioGKtTL7E-r0'
  //   }
  // },


  include: {
    I: './steps_file.js'
  },
  name: 'Automacao-FLEXTOTAL'
}