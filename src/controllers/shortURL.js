// create model
var ShortURL = require('../models/url');

// save new record
const createAndSaveURL = (url, done) => {

    const newURL = new ShortURL(url);
    
    console.log("newurl: ", newURL);
    
    newURL.save((err, newURL) => {
        if(err) return console.error(err);
        done(null, newURL);
    })
}

module.exports = {createAndSaveURL};