// Karma configuration
// http://karma-runner.github.io/0.13/config/configuration-file.html
/*eslint-env node*/


module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['mocha', 'chai-datetime', 'chai', 'sinon-chai', 'chai-as-promised', 'chai-things'],

    client: {
      mocha: {
        timeout: 5000 // set default mocha spec timeout
      }
    },

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'client/bower_components/angular/angular.js',
      'client/bower_components/jquery/dist/jquery.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/lodash/lodash.js',
      'client/bower_components/angular-ui-router/release/angular-ui-router.js',
      'client/bower_components/angular-animate/angular-animate.js',
      'client/bower_components/ngmap/build/scripts/ng-map.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'client/app/app.js',
      'client/{app,components}/**/*.module.js',
      'client/{app,components}/**/*.js',
      'client/{app,components}/**/*.{jade,html}'
    ],

    preprocessors: {
      '**/*.jade': 'ng-jade2js',
      '**/*.html': 'html2js',
      'client/{app,components}/**/*.js': 'babel'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    ngJade2JsPreprocessor: {
      stripPrefix: 'client/'
    },

    babelPreprocessor: {
        options: {
            sourceMap: 'inline'
        },
        filename: function (file) {
            return file.originalPath.replace(/\*.js$/, '.es5.js');
        },
        sourceFileName: function (file) {
            return file.originalPath
        }
    },

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-firefox-launcher'),
      require('karma-mocha'),
      require('karma-chai-plugins'),
      require('karma-chai-datetime'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-script-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-babel-preprocessor'),
      require('karma-html2js-preprocessor'),
      require('karma-ng-html2js-preprocessor'),
      require('karma-ng-jade2js-preprocessor')
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // reporter types:
    // - dots
    // - progress (default)
    // - spec (karma-spec-reporter)
    // - junit
    // - growl
    // - coverage
    reporters: ['spec'],

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
