/*\
title: $:/plugins/botwhytho/tiddlyCounter/tc_increaseCount.js
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

exports.name = "tc_increaseCount";

exports.params = [
	{name: "td"}
];
/*
Run the macro
*/

exports.run = function(td) {
			var tid = $tw.wiki.getTiddler(td);
			return (parseInt(tid.fields.count) || 0) +1;
};

})();
