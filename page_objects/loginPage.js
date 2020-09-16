"use strict";
let EC = protractor.ExpectedConditions;
var loginPage = function() { 
    this.goTo = function () {
        browser.get(browser.baseUrl);
    }

    this.linkForgotPassword = element(by.xpath('//a[contains(string(), "Forgot your password")]'))
    
    this.txtFieldEmailAddress = element(by.xpath('//input[@name="email"]'))
    this.txtFieldPassword = element(by.xpath('//input[@name="password"]'))
    this.buttonSignIn = element(by.xpath('//span[contains(string(), "Sign in")]/ancestor::button'))
}

module.exports = new loginPage();