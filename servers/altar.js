'use strict';

const log = require('../logger');

function setup(app) {
    // init
    
    
    // middlewares
    
    
    // routes
    app.get('/', (req, res) => {
        res.render('error', {
            errorCode:'altar',
        });
    });
}

module.exports = setup;