var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['viewIndividualBookSpec.js'],
    baseUrl: 'http://localhost:8000',

    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                dest: 'test_results',
                filename: 'viewIndividualBook-report.html'
            })
        );
    },
}