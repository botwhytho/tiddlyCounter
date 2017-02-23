/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_countData.js
type: application/javascript
module-type: macro

Macro to return counter JSON data with new measurement appended

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tc_countData";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			var json = JSON.parse(tid.fields.text);
      json.readings[json.readings.length-1].timestamps.push($tw.utils.stringifyDate(new Date()));
      return JSON.stringify(json);
};

})();
