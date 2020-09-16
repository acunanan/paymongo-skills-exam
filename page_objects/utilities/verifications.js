"use strict"
let EC = protractor.ExpectedConditions;


let verification = function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);

    this.checkIfElementIsNotEmpty = function (object, name = "Element") {

        browser.wait(EC.visibilityOf(object), 10000, name + " not found.").then(function () {
            browser.sleep(500)
            object.getTagName().then(function (tagName) {

                if (tagName === "input") {
                    object.getAttribute('value').then(function (value) {
                        expect((value.trim()).length).not.toEqual(0);
                    })
                }
                else {
                    object.getText().then(function (text) {
                        expect((text.trim()).length).not.toEqual(0);
                    });
                }

            });

        });
    }

    this.checkIfElementIsPresent = function (object, errorMessage = "Element is not visible", timeout = 30000) {
        browser.wait(EC.visibilityOf(object), timeout, errorMessage).then(function (result) {
            browser.sleep(500);
            expect(result).toEqual(true);
        })
    };

};

module.exports = new verification();