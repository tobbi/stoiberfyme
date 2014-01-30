require("sdk/tabs").on("ready", runScript);
var self = require("sdk/self");
 
function runScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("stoiberfyme.js")
  });
}