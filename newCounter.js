/*\
title: $:/plugins/botwhytho/tiddlyCounter/newCounter.js
type: application/javascript
module-type: macro

Macro to Create Multiple Counters

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "newCounter";

exports.params = [
	{name: "counterList"}
];
/*
Run the macro
*/

exports.run = function(counterList) {
		var items = counterList.split("|");
    var tmp = '<$importvariables filter="[[$:/plugins/botwhytho/tiddlyCounter]plugintiddlers[]]">';
    items.forEach(function(element, index, array){
		tmp = tmp + '<<tc_newItem "' + element + '">><br><br>';
    })
		tmp = tmp + "</$importvariables>";
    return tmp;
}

})();
