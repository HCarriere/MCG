'use strict';

const express = require('express');

function setup(app) {
    // init
    app.use(express.static(__dirname + '../views/assets'));
    
    // middlewares
    
    
    // routes
    app
    .get('/', (req, res) => {
        res.render('game', {
            errorCode:'warzone',
        });
    });
    
}

module.exports = setup;