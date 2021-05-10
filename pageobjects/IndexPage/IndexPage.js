'use strict';

let BasePage = require('./../BasePage');

class IndexPage extends BasePage {
    constructor() {
        super();
		this.search = element(by.class('header-search-ui header__control'));
		this.search_field = element(by.class('header-search__panel'));
		this.search_results = element(by.class("search-results__input-holder"));
		this.search_submit = element(by.class("header-search__submit"));
		this.insights = element.all(by.partialLinkText('insights'));
		this.logo = element(by.class('header__logo-container'));
		this.language = element(by.buttonText('Global (EN)'));
		this.ukrainian = element.all(by.class('location-selector__link')).get(7);
		this.contact = element(by.class('cta-button-ui cta-button--envelope header__control'));
		this.careers = element.all(by.partialLinkText('careers'));
    }


}

module.exports = IndexPage;