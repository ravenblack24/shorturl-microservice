// create model
var ShortURL = require('../models/url');

// save new record
const createAndSaveURL = (url, res) => {

    const newURL = new ShortURL(url);  
    console.log("newurl: ", newURL);
    
    newURL.save((err, data) => {
        if(err) return console.error(err);
        res.send({"original_url": data.original_url, "short_url": data.short_url});
    });
}

const findByShortURL = (shortURL, done) => {

    ShortURL.findOne({short_url: shortURL}, (err, data) => {
        if(err) return console.log(err);
        done(null, data);
    })
}

module.exports = {createAndSaveURL};