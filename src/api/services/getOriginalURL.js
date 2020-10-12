/**
 * Lookup original url in the database from short url
 * 
 * @param {Request}  req    the original request containing the short url to lookup
 * @param {Response} res    the response to the request
 * 
 * @returns {String} 
 */
const getOriginalURL = (req, res) => {
    const shortURL = req.params.shortURL;

    if(!shortURL) {
        return res.json({"error": "No short URL provided"});  
    }  
    
    var db = require('../controllers/index');
    db.findOneByShortURL(shortURL, res);
}

module.exports = {getOriginalURL}