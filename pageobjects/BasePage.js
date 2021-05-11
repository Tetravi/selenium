'use strict';

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');}

    isElementVisible(element) {
        return element.isDisplayed();
    }

    isElementExist(element) {
        return element.isPresent();
    }

    clickButton(buttonName) {
        buttonName.click();
    }
}

module.exports = BasePage;
