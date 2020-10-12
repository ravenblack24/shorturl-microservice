// Create model
var {ShortURL} = require('../models/url');

/**
 * Save a URL to the database
 * 
 * @param {String}   original_url the original url to save
 * @param {Response} res          the response to the request
 * 
 * @returns {String} 
 * 
 * @throws {Error}
 */
const createAndSaveURL = (original_url, res) => {

    const newURL = new ShortURL(original_url);  
    
    newURL.save((err, data) => {
        if(err) throw new Error(err);
        res.json({"original_url": data.original_url, "short_url": data.short_url});
    });
}

module.exports = {createAndSaveURL};