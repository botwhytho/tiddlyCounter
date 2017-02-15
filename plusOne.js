/*\
title: $:/plugins/botwhytho/tiddlyCounter/plusOne.js
type: application/javascript
module-type: macro

Macro to increase counter value

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "plusOne";

exports.params = [
	{name: "td"},
  {name: "field"}
];
/*
Run the macro
*/

exports.run = function(td,field) {
			var tid = $tw.wiki.getTiddler(td)
			
			if (field == "count") {
				return tid ? parseInt(tid.fields.count)+1 : 1;
			} else {
				var json = tid ? JSON.parse(tid.fields.text) : {readings:[[]],start:0,finish:0};
				json.readings[json.readings.length-1].push($tw.utils.formatDateString(new Date(), "DD/MM/YY 0hh:0mm:0ss"));
				return JSON.stringify(json);
			}
};

})();
