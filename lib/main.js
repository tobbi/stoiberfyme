require("sdk/tabs").on("ready", logURL);
var self = require("sdk/self");

function logURL(tab) {
  runScript(tab);
}
 
function runScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("stoiberfyme.js")
  });
}