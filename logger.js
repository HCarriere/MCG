const debugModule = require('debug');
const config = require('./configuration');
let log;


if(config.debug) {
    debugModule.enable(config.server.type);
    log = debugModule(config.server.type);
    log('debug activated');
}



module.exports = log;