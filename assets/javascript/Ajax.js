"use strict";

var Ajax = (function() {
    var s = { "supportIE6": false },
        me = {};
    
    me.httpRequest = function(requestType, urlToRequest, async, functionToRun) {
        var xmlhttp;
    
        if (s.supportIE6) {
            console.log("Vi supporter IE6");
            xmlhttp = (window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            console.log("Vi supporter IKKE IE6");
            xmlhttp = new XMLHttpRequest();
        }
    
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if (xmlhttp.status == 200) {
                    functionToRun({ "data": JSON.parse(xmlhttp.responseText), "statusCode": 200 });
                }
                else {
                    functionToRun({ "data": "", "statusCode": xmlhttp.status });
                }
            }
        }
    
        xmlhttp.open(requestType, urlToRequest, async);
        xmlhttp.send();
    }
    
    return me;
}());

