// create model
var ShortURL = require('../models/url');

// save new record
const createAndSaveURL = (url, done) => {
    
    var newURL = new ShortURL(url);

    newURL.save((err, newURL) => {
        if(err) return console.error(err);
        done(null, newURL);
    })
}

module.exports = {createAndSaveURL};