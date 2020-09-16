let loginPage = require('../page_objects/loginPage')
let isLoggedIn = require('../page_objects/isLoggedIn')
let actions = require('../page_objects/utilities/actions')
let verifications = require('../page_objects/utilities/verifications')

describe('Paymongo - Login Page', function() {
    it('Should display Paymongo Login Page', function() {
        isLoggedIn.loginToPaymongo()
        browser.sleep(5000)
        verifications.checkIfElementIsPresent(loginPage.buttonSignIn)
        verifications.checkIfElementIsPresent(loginPage.txtFieldEmailAddress)
        verifications.checkIfElementIsPresent(loginPage.txtFieldPassword)
    })
    it('Should enter email address', function() {
        actions.enterText(loginPage.txtFieldEmailAddress, browser.params.login.email)
        verifications.checkIfElementIsNotEmpty(loginPage.txtFieldEmailAddress)
    })
    it('Should enter password', function() {
        actions.enterText(loginPage.txtFieldPassword, browser.params.login.password)
        verifications.checkIfElementIsNotEmpty(loginPage.txtFieldPassword)
    })
})