/*
* Patient book page test
*/

var common = require('./Common.js');
var browser = common.browser;
var webdriver = common.webdriver;
var reader = require('./ReadTestData.js');


function findArticleTitle() {
	return browser.findElements(webdriver.By.xpath("//h1[@class='article-title']")).then(function(result) {
		return result[0];
	})
}

//C53916 Test
common.openBrowser(reader.getWebPortal());
reader.getArrayOfXmlElements('./links.xml');
var links = reader.links;
var hrefs = reader.hrefs;

for(i = 0; i < links.length; i++) {
	browser.wait(common.findLink(links[i])).then(common.clickLink);
	browser.wait(findArticleTitle, 2000).then(common.verifyPageUrl(hrefs[i]));
	browser.get(reader.getWebPortal());
}
common.closeBrowser();