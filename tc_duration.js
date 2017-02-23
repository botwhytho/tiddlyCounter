/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_duration.js
type: application/javascript
module-type: macro

Macro that updates current duration and stores it as a tiddler field. This, combined with count assist in calculating rate
potentially good for ouside re-use without going into the internal JSON internals

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "tc_duration";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			var json = JSON.parse(tid.fields.text);

			if (json.readings[json.readings.length-1].timestamps.length == 0) {
				return (parseFloat(tid.fields.duration) || 0.00) + Math.round(Math.abs(new Date() - $tw.utils.parseDate(json.readings[json.readings.length-1].start))/1000);
			} else {
				return parseFloat(tid.fields.duration) + Math.round(Math.abs(new Date() - $tw.utils.parseDate(json.readings[json.readings.length-1].timestamps[json.readings[json.readings.length-1].timestamps.length-1]))/1000);
			}

};

})();
