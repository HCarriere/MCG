'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let config = require('../../configuration');

let schema = new Schema({
    email:String
});

module.exports = mongoose.model(config.database.model.user, schema);