// Create model
var ShortURL = require('../models/url');

/**
 * Find a shortURL in the database
 * 
 * @param {String}   shortURL the string representing a shortURL to lookup
 * @param {Response} res      the response to the request
 * 
 * @returns {String|Object} 
 * 
 * @throws {Error}
 */
const findOneByShortURL = (shortURL, res) => {

    ShortURL.findOne({"short_url": shortURL}, (err, data) => {
        if(err) {
            throw new Error(err);
        } 
        if(!data) {
            return res.json({"error": "No short URL found for the given input"}) 
        }
        res.redirect(data.original_url);  
    })
}

module.exports = {findOneByShortURL};