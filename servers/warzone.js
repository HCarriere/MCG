'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const config = require('../configuration');

function setup(app) {
    // express options
    app.use(express.static(__dirname + '/../views/assets'));
    
    // handlebars configuration
    let handlebars = exphbs.create({
        defaultLayout: 'main',
        extname: '.hbs',
        layoutsDir: __dirname+'/../views/layouts',
    });
    app
    .engine('.hbs', handlebars.engine)
    .set('view engine', '.hbs')
    .set('views', __dirname+'/../views/layouts');
    
    // middlewares
    
    
    // routes
    app
    .get('/', (req, res) => {
        res.render('game', {
            additionalJs: [
                config.game.root+'core.js',
                config.game.root+'debug.js',
                config.game.root+'graphics/base.js',
                config.game.root+'graphics/filters.js',
            ]
        });
    })
    
    // 404 route
    .get('*', (req, res) => {
        res.render('error', {
            errorCode: 404,
        });
    });
    
}

module.exports = setup;