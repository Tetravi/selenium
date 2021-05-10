'use strict';

let BasePage = require('./../BasePage');

class CareersPage extends BasePage {
    constructor() {
        super();
		this.appNameHeader += '/careers';
		this.find = element(by.class('recruiting-search__submit'));
    }


}

module.exports = CareersPage;