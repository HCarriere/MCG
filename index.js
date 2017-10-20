'use strict';

const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const http = require('http');
const path = require('path');
const passport = require('passport');
const multer = require('multer');
const bodyParser = require('body-parser');

const config = require('./configuration');
const servers = require('./servers');
const log = require('./logger');

const app = express();
const server = http.createServer(app);

// Express configuration
app
// .use(express.static(__dirname + '/views/assets'))   // styles
.use(session({
    secret: config.session.secret,
    resave: false,
    saveUninitialized: false
}));

// Other configurations
app
.use(passport.initialize())
.use(passport.session())
.use(bodyParser.json())        // to support JSON-encoded bodies
.use(bodyParser.urlencoded({    // to support URL-encoded bodies
  extended: true
}));

// handlebars configuration
let handlebars = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname,'views/layouts'),
});
app
.engine('.hbs', handlebars.engine)
.set('view engine', '.hbs')
.set('views', path.join(__dirname, 'views/layouts'));

// routes, middlewares, setup
servers.setupServers(app, config.server.type);


// 404 route
app.get('*', (req, res) => {
    res.render('error', {
        errorCode: 404,
    });
});

//////////// Error handler //////////
app.use((err, request, response, next) => {  
    log(err);
    response.status(500).render('error', {
        errorCode:500,
    });
});

server.listen(config.server.port, (err) => {
    if(err) {
        return err;
    }
    log('launch OK, listening on '+config.server.port);
});