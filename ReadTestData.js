/*
* There is code for 'links.xml' file parsing and getting webPortal
*/

var jsxml = require('jsxml');
var fs = require('fs');
var links = new Array();
var hrefs = new Array();

function getWebPortal() {
	var file = fs.openSync('./webPortal.txt', 'r');
	var data = fs.readSync(file, 10000, null, 'ascii');
 	var webPortal = data[0];
	fs.closeSync(file);
	return webPortal;
}

function getArrayOfXmlElements(xmlFile) {
	var xmlContent = String(fs.readFileSync(xmlFile));
	var firstVersion = jsxml.fromXml(xmlContent);
	var secondVersion = firstVersion.filter(checkEmpty);
	var lastVersion = secondVersion.filter(checkNewRowElements);

	for(i = 0; i < lastVersion.length; i++) {
		links.push(lastVersion[i][2][1]);
		hrefs.push(lastVersion[i][4][1]);
	} 
}

function checkEmpty(object) {
	return object != null;
}

function checkNewRowElements(object) {
	return (object != '\r\n\t\t' && object != '\r\n\t');
}

module.exports = {
	getArrayOfXmlElements,
	getWebPortal,
	links,
	hrefs
}