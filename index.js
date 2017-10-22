'use strict';

const express = require('express');
const session = require('express-session');
const http = require('http');
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


// routes, middlewares, setup
servers.setupServers(app, config.server.type);


//////////// Error handler //////////
app.use((err, request, response, next) => {  
    log(err);
    res.status(500);
    res.json(err);
});

server.listen(config.server.port, (err) => {
    if(err) {
        return err;
    }
    log('launch OK, listening on '+config.server.port);
});