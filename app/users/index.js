'use strict';

let User = require('./schema');


function createUser(req, callback) {
    
    let user = new User();
    user.email = req.body.email;
    
    user.save((err) => {
        callback(err);
    });
}

function getUsers(req, callback) {
    User.find().exec((err, data) => {
        callback(data);
    });
}

module.exports = {
    createUser,
    getUsers,
};