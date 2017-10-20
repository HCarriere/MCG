'use strict';

const mongoose = require('mongoose');
const md5 = require('md5');
const conf = require('../configuration');
const log = require('../logger');

function connect() {
    let address = getAddress();
    log('connection to mongodb');
    
    mongoose.Promise = global.Promise;
    let mongoDB = mongoose.connect(address, {
        useMongoClient: true,
        promiseLibrary: global.Promise,
    });
    
    mongoDB
    .then(db => {
        log('connected to mongodb');
    })
    .catch(err => {
        log('Error while trying to connect with mongodb');
        log(err);
    })
}


/**
 * compose the address from conf & env var
 * @return {[type]}
 */
function getAddress() {
    let address = process.env.DB_PREFIX || conf.database.defaultAddress.prefix;
    address+='://';
    if(process.env.DB_USER && process.env.DB_PASSWORD) {
		address+=process.env.DB_USER+
		':'+
		md5(process.env.DB_PASSWORD+conf.database.salt)+'@';
    }
    address += process.env.DB_NAME || conf.database.defaultAddress.name;
    address+='/';
    address += process.env.DB_DATABASE || conf.database.defaultAddress.database;

    return address;
}


module.exports = {
    connect,
}