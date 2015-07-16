var isCI = process.env.CONTINUOUS_INTEGRATION === 'true';

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'sinon-chai'
    ],

    files: [
      'test.js'
    ],

    reporters: ['mocha'],

    mochaReporter: {
      output: 'autowatch'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ isCI ? 'ChromeTravisCI' : 'Chrome' ],

    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,

    singleRun: isCI
  });
};
