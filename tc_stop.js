/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_stop.js
type: application/javascript
module-type: macro

Macro that records stop times.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tc_stop";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			var json = JSON.parse(tid.fields.text);
      json.readings[json.readings.length-1].finish = $tw.utils.stringifyDate(new Date());
      json.readings.push({timestamps:[],start:0,finish:0});
			return JSON.stringify(json);
};

})();
