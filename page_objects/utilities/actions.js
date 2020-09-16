"use strict"
let EC = protractor.ExpectedConditions;
let Protractor = require('protractor');
let path = require('path');


let actions = function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);

    this.enterText = function (object, text, delay = 500) {
        browser.wait(EC.visibilityOf(object), 30000).then(function () {
            browser.sleep(delay)
            object.clear();
            object.sendKeys(text);
        });
    }
    
    this.clickElement = function (object, timeout = 10000) {
        browser.wait(EC.presenceOf(object), timeout, "Unable to click the element").then(function () {
            browser.sleep(500)
            object.click();
        });
    }

    
};
module.exports = new actions();