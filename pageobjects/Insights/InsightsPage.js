'use strict';

let BasePage = require('./../BasePage');

class InsightsPage extends BasePage {
    constructor() {
        super();
		this.appNameHeader += '/insights';
		this.filter = element.all(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/div[2]/div/div/span[1]/div/div[2]/div/ul/li[2]/label/input'));
		this.filter_result = element.all(by.xpath('/html/body/div[2]/main/div[1]/div[4]/section/div/div[1]/div/ul/li'));
    }


}

module.exports = InsightsPage;