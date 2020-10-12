// create model
var ShortURL = require('../models/URL');

// save new record
const createAndSaveURL = (url, res) => {

    const newURL = new ShortURL(url);  
    
    newURL.save((err, data) => {
        if(err) return console.error(err);
        res.send({"original_url": data.original_url, "short_url": data.short_url});
    });
}

const findOneByShortURL = (shortURL, res) => {

    ShortURL.findOne({"short_url": shortURL}, (err, data) => {
        if(err) {
            return console.log(err);
            
        } 
        if(!data) {
            return res.json({"error": "No short URL found for the given input"}) 
        }
        res.redirect(data.original_url);  
    })
}

module.exports = {createAndSaveURL, findOneByShortURL};