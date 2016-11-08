var self = require("sdk/self");

const {Cc, Ci} = require("chrome");

var globalMM = Cc["@mozilla.org/globalmessagemanager;1"]
  .getService(Ci.nsIMessageListenerManager);

globalMM.loadFrameScript("chrome://frame-script-example/content/frame-script.js", true);
