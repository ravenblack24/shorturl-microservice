const getShortURL = (req, res) => {
    const request = req.params.shortURL;

    if(!request) {
        return res.json({"error": "No short URL provided"});  
    }  
    
    const db = require('../../controllers/shortURL');
    db.findOneByShortURL(request, res);
}

module.exports = {getShortURL}