/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_start.js
type: application/javascript
module-type: macro

Macro that records start time. If data tiddler does not exist, it is created.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tc_start";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			var json = tid ? JSON.parse(tid.fields.text) : {readings:[{timestamps:[],start:0,finish:0}]};
      json.readings[json.readings.length-1].start = $tw.utils.stringifyDate(new Date());
      return JSON.stringify(json);
};

})();
