'use strict';

const log = require('../logger');

const temple = require('./temple');
const valley = require('./valley');
const warzone = require('./warzone');
const altar = require('./altar');

function setupServers(app, serverType) {
    switch(serverType) {
        case 'temple':
            temple(app);
            break;
        case 'valley':
            valley(app);
            break;
        case 'warzone':
            warzone(app);
            break;
        case 'altar':
            altar(app);
            break;
        default:
            log('ERROR : '+serverType+' is not a valid server type.');            
    }
}

module.exports = {
    setupServers,
};