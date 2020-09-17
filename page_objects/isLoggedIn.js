"use strict";
let EC = protractor.ExpectedConditions;
var loginPage = require('./loginPage');
let verifications= require('../page_objects/utilities/verifications');
let actions = require('../page_objects/utilities/actions');
var isLoggedIn = function () { 
    this.loginToPaymongo = function (url) {
        browser.ignoreSynchronization = true;
        console.log('Login as user: ' + browser.params.login.email)
        browser.ignoreSynchronization = true;
        loginPage.goTo();
        actions.enterText(loginPage.txtFieldEmailAddress, browser.params.login.email)
        verifications.checkIfElementIsNotEmpty(loginPage.txtFieldEmailAddress)
        actions.enterText(loginPage.txtFieldPassword, browser.params.login.password)
        verifications.checkIfElementIsNotEmpty(loginPage.txtFieldPassword)
        actions.clickElement(loginPage.buttonSignIn)
    }
}

module.exports = new isLoggedIn();