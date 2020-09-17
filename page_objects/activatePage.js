"use strict";

const { element } = require("protractor");

let EC = protractor.ExpectedConditions;
var activatePage = function() { 
    

    this.userFullName = element(by.xpath('//span[contains(text(), "Alvin Cunanan")]/ancestor::div[@class="topbar-right-panel"]'))
    this.sideNavLinks = element(by.xpath('//span[contains(text(), "Links")]/ancestor::li[@class="ant-menu-item sidebar-item links"]'))
    this.sideNavPayments = element(by.xpath('//span[contains(text(), "Payments")]/ancestor::li[@class="ant-menu-item sidebar-item payments"]'))
    this.sideNavPayouts = element(by.xpath('//span[contains(text(), "Payouts")]/ancestor::li[@class="ant-menu-item sidebar-item settings"]'))
    this.sideNavDevelopers = element(by.xpath('//span[contains(text(), "Developers")]/ancestor::li[@class="ant-menu-item sidebar-item settings"]'))
    this.sideNavSettings = element(by.xpath('//span[contains(text(), "Settings")]/ancestor::li[@class="ant-menu-item sidebar-item settings"]'))

    this.userFirstName = element(by.xpath('//input[@placeholder="First name"]'))
    this.userLastName = element(by.xpath('//input[@placeholder="Last name"]'))
    this.dob = element(by.xpath('//input[@placeholder="Select date"]'))
    this.addressLine1 = element(by.xpath('//input/ancestor::div[@class="personal-address-line-1"]'))
    this.addressLine2 = element(by.xpath('//input/ancestor::div[@class="personal-address-line-2"]'))
    this.cityAddress = element(by.xpath('//input/ancestor::div[@class="personal-address-city"]'))
    this.stateAddress = element(by.xpath('//div[contains(text(), "Metro Manila")]/ancestor::div[@class="personal-address-state"]'))
    this.postCode = element(by.xpath('//input/ancestor::div[@class="personal-address-zip-code"]'))
    this.buttonContinueBusinessInfo = element(by.xpath('//span[contains(text(), "Continue to business information")]/ancestor::button'))
    this.errorMsgValidId = element(by.xpath('//p[contains(text(), "The value for government ID cannot be blank.")]'))
    this.buttonSelectFile = element(by.xpath('//span[contains(text(), "Select files")]/ancestor::button'))
}

module.exports = new activatePage();