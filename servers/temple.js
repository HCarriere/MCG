'use strict';

function setup(app) {
    // init
    
    
    // middlewares
    
    
    // routes
    app.get('/', (req, res) => {
        res.render('error', {
            errorCode:'temple',
        });
    });
}

module.exports = setup;