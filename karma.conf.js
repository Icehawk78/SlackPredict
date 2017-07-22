/**
 * To setup and execute UI unit tests:
 * 1.)  Install latest version of NodeJS LTS
 * 2.)  Open a command prompt and change directory to `../src/main/resources/static`
 * 3.)  Execute `npm install` to install unit testing packages
 * 4.)  Execute `npm install -g karma-cli` to install the Karma CLI tool
 * 5.)  Execute `npm test` to being executing unit tests
 * 6.)  ???
 * 7.)  Profit
 */

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // third party libraries

            // ui application source code
            'index.js',

            // ui unit tests
            'tests/**/*.spec.js',
            {pattern: 'tests/**/*.json', watched: true, served: true, included: false}
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 'js/services/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],
        //reporters: ['mocha'],

        coverageReporter: {
            dir: 'tests/reports',
            reporters: [
                // { type: 'html', subdir: 'report-html'},
                { type: 'text-summary'}
                // { type: 'text'}
            ],
            includeAllSources: true
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        // logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'PhantomJS'
            //'Chrome' // Uncomment if you want to debug tests in Chrome.
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}