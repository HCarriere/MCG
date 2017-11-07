'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const config = require('../configuration');

function setup(app) {
    // init
    app
    .use('/public', express.static(__dirname + '/../views/assets'))
    .use('/assets', express.static(__dirname + '/../gameassets'))
    .use('/editor', express.static(__dirname + '/../editor'));
    
    
    // handlebars
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
    app.get('/', (req, res) => {
        res.render('editor', {
            additionalJs: config.editorSources.map(
                (val) => {
                    return '/editor/'+val;
                }
            ),
            additionalCss: [
                '/public/css/editor.css'
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