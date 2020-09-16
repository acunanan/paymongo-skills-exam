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
    }
}

module.exports = new isLoggedIn();