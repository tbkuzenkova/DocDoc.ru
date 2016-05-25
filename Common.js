/* 
* There is common items and functions (for any page)
*/

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
var assert = require('assert');

function openBrowser(url) {
	browser.get(url);
	browser.manage().window().maximize();
}

function findLink(linkText) {
	return browser.findElement(webdriver.By.xpath("//a[contains(text(), '" + linkText + "')]"));
}

function clickLink(link) {
	link.click();
}

function verifyPageUrl(path) {
	var actualUrl = browser.getCurrentUrl();
	actualUrl.then(function(urlString) {
		console.log('Actual url is ' + urlString);
		assert.ok(urlString.indexOf(path) > -1);
	});	
}

function closeBrowser() {
	browser.quit();
}

module.exports = { 
	openBrowser,
	findLink,
	clickLink,
	verifyPageUrl,
	closeBrowser,
	webdriver,
	browser
}