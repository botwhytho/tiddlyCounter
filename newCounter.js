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

exports.run = function(counterList)  {
    var tmp = "";   
    counterList.split("|").forEach(function(element, index, array){
    tmp = tmp + "<br><br>" + "<$button>" + element + "<$action-setfield $tiddler='" + element + "' text=<<plusOne '" + element + "'  'count'>> /><$action-setfield $tiddler='" + element + "Data' text=<<plusOne '" + element + "'  'data'>> type='application/json' /></$button>  {{" + element + "!!text}}";
    })
    return tmp;
}

})();