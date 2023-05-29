const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://192.168.1.128:9090/flextotal/login',
      browser: 'chrome',
      restart: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Automacao-FLEXTOTAL'
}