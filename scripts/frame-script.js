
addEventListener("DOMContentLoaded", function(event) {
    var doc = event.originalTarget;
    dump("frame-script.js: DOMContentLoaded: capture: " + doc.location + "\n");
}, true);

addEventListener("DOMContentLoaded", function(event) {
    var doc = event.originalTarget;
    dump("frame-script.js: DOMContentLoaded: bubble: " + doc.location + "\n");
}, false);

addEventListener("DOMWindowCreated", function(event) {
    dump("frame-script.js: DOMWindowCreated: capture\n");
}, true);

addEventListener("DOMWindowCreated", function(event) {
    dump("frame-script.js: DOMWindowCreated: bubble\n");
}, false);

addEventListener("load", function(event) {
    var doc = event.originalTarget;
    dump("frame-script.js: load: capture: " + doc.location + "\n");
}, true);

addEventListener("load", function(event) {
    var doc = event.originalTarget;
    dump("frame-script.js: load: bubble: " + doc.location + "\n");
}, false);
