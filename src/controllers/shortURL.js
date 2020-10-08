const mongoose = require('mongoose');

const URL = require(__dirname+'/../models/URL');

const createAndSaveURL = (url, done) => {

    var newURL = new URL(url);

    newURL.save((err, data) => {
        if(err) return console.error(err);
        done(null, newURL);
    })

}

module.exports = {createAndSaveURL}