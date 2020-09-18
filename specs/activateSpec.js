let loginPage = require('../page_objects/loginPage')
let activatePage = require('../page_objects/activatePage')
let isLoggedIn = require('../page_objects/isLoggedIn')
let actions = require('../page_objects/utilities/actions')
let verifications = require('../page_objects/utilities/verifications')

describe('PayMongo - Activate Page', function() {
    it('should login if user is still not signed-in', function() {
        if (browser.params.isLoggedIn == false) {
            isLoggedIn.loginToPaymongo();
        } else {
            console.log('Already logged in as user: ' + browser.params.login.email)
            browser.params.isLoggedIn = true
        }
        
     })
    it('Should display user\'s full name in upper-right corner of the screen', function() {
        verifications.checkIfElementIsPresent(activatePage.userFullName)
    })
    it('Should display side menu - links', function() {
        verifications.checkIfElementIsPresent(activatePage.sideNavLinks)
    })
    it('Should display side menu - payments', function() {
        verifications.checkIfElementIsPresent(activatePage.sideNavPayments)
    })
    it('Should display side menu - payouts', function() {
        verifications.checkIfElementIsPresent(activatePage.sideNavPayouts)
    })
    it('Should display side menu - developers', function() {
        verifications.checkIfElementIsPresent(activatePage.sideNavDevelopers)
    })
    it('Should display side menu - settings', function() {
        verifications.checkIfElementIsPresent(activatePage.sideNavSettings)
    })
    it('Should display user\'s first name', function() {
        verifications.checkIfElementIsNotEmpty(activatePage.userFirstName)
    })
    it('Should display user\'s last name', function() {
        verifications.checkIfElementIsNotEmpty(activatePage.userFirstName)
    })
    it('Should display address line 1', function() {
        verifications.checkIfElementIsPresent(activatePage.addressLine1)
    })
    it('Should display address line 2', function() {
        verifications.checkIfElementIsPresent(activatePage.addressLine2)
    })
    it('Should display city address text field', function() {
        verifications.checkIfElementIsPresent(activatePage.cityAddress)
    })
    it('Should display state dropdown', function() {
        verifications.checkIfElementIsPresent(activatePage.stateAddress)
    })
    it('Should display postcode text field', function() {
        verifications.checkIfElementIsPresent(activatePage.stateAddress)
    })
    it('Should display Select Files button', function() {
        verifications.checkIfElementIsPresent(activatePage.buttonSelectFile)
    })
    it('Should display Continue to business information button', function() {
        verifications.checkIfElementIsPresent(activatePage.buttonContinueBusinessInfo)
    })
    it('Should display validation error below the Select files upload button', function() {
        actions.clickElement(activatePage.buttonContinueBusinessInfo)
        verifications.checkIfElementIsPresent(activatePage.buttonContinueBusinessInfo)
    })    
})