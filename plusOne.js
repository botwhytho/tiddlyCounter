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
    if (field == "count") {
        return (($tw.wiki.getTiddlerText(td) || 0) * 1) + 1;
    } else {
       var tmp;
       if (typeof($tw.wiki.getTiddlerText(td + "Data")) == "undefined") 
       { 
       tmp=null 
       } else
      {
      tmp=$tw.wiki.getTiddlerText(td + "Data").substring(0,$tw.wiki.getTiddlerText(td + "Data").length-1) + ","
      }
       return (tmp || '[') + '{"x":' + ($tw.wiki.getTiddlerText(td) * 1 + 1 || 1) + ',"date":"' + $tw.utils.formatDateString(new Date(), "DD/MM/YY 0hh:0mm:0ss") + '"}]'  ;
    }
};

})();