/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_rate.js
type: application/javascript
module-type: macro

Macro that updates the current average rate of phenomenom being tracked in occurences per hour

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tc_rate";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			return tid.fields.count ? (parseFloat(tid.fields.count) / parseFloat(tid.fields.duration) * 3600).toFixed(2) : "";
};

})();
