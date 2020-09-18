"use strict";
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require("protractor-beautiful-reporter");
var jasmineReporters = require('jasmine-reporters');
//const puppeteer = require('puppeteer');


exports.config = {

    framework: 'jasmine',
    jasmineNodeOpts:
    {
        showColors: true,
        displaySpecDuration: true,
        print: () => { },
        defaultTimeoutInterval: 240000,
        verbose: true,
        includeStackTrace: false,
    },
    allScriptsTimeout: 240000,
    directConnect: true,
    chromeDriver:'./chromedriver',
    baseUrl: 'https://dashboard.paymongo.com/login',
    suites: {
        activate: 'specs/activateSpec.js'
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                //'--headless',
                '--disable-gpu',
                '--no-sandbox',
                '--disable-dev-shm-usage',
                '--log-level=3',
                '--disable-browser-side-navigation',
                '--enable-automation',
                '--disable-infobars',
                '--window-size=1920,1080',
                '--disable-web-security',
                '--always-authorize-plugins',
                "--use-fake-ui-media-stream",
                "--use-fake-device-for-media-stream"
            ],
            w3c: false,
            //binary: puppeteer.executablePath()
        }
    },

    onPrepare: function () {
        browser.manage().window().setSize(1600, 1000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: "reports/regression",
            jsonsSubfolder: 'jsons',
            screenshotsSubfolder: 'images',
            excludeSkippedSpecs: false,
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: "Paymongo - Test Report",
            docName: "report.html"
        }).getJasmine2Reporter())

        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            consolidate: true,
            savePath: 'reports/xmls/paymongo',
            filePrefix: 'paymongo_xmloutput_',
            suppressDisabled: true
        }));

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',
            colors: {
                enabled: true
            },
            prefixes: {
                successful: 'PASSED - ',
                failed: 'FAILED - '
            }
        }));
    },

    params: {
        login: {
            email: 'acunanan1890@gmail.com',
            password: 'tEsting1'
        },
        isLoggedIn: false
    }
}


