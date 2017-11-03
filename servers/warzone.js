'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const config = require('../configuration');

function setup(app) {
    // express options
    app
    .use('/public', express.static(__dirname + '/../views/assets'))
    .use('/assets', express.static(__dirname + '/../gameassets'))
    .use('/game', express.static(__dirname + '/../game'));
    
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
                config.game.root+'/core.js',
                config.game.root+'/const.js',
                config.game.root+'/debug.js',
                config.game.root+'/graphics/base.js',
                config.game.root+'/graphics/filters.js',
                config.game.root+'/physics/physics.js',
                config.game.root+'/physics/particles.js',
                config.game.root+'/controller/controller.js',
                config.game.root+'/controller/keyboard.js',
                config.game.root+'/controller/pointer.js',
                config.game.root+'/ui/buttons.js',
                config.game.root+'/ui/scenes.js',
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