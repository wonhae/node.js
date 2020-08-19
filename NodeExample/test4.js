var nconf = require("nconf");
nconf.env();  /*반드시 호출해야! */

var val = nconf.get("OS");
console.log(val);

