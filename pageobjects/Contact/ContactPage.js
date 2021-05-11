'use strict';

let BasePage = require('./../BasePage');

class ContactPage extends BasePage {
    constructor() {
        super();
		this.appNameHeader += 'about/who-we-are/contact';
		this.number = element(by.partialLinkText('tel:+12677599000'));
    }


}

module.exports = ContactPage;
