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
            additionalJs: gameSources.map(
                (val) => {
                    return config.game.root+'/'+val;
                }
            )
        });
    })
    
    // 404 route
    .get('*', (req, res) => {
        res.render('error', {
            errorCode: 404,
        });
    });
    
}

let gameSources = [
    'core.js',
    'const.js',
    'debug.js',
    'utils.js',
    'graphics/base.js',
    'graphics/filters.js',
    'physics/physics.js',
    'physics/particles.js',
    'controller/controller.js',
    'controller/keyboard.js',
    'ui/buttons.js',
    'ui/scenes.js',
];

module.exports = setup;