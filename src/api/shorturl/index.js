const getShortURL = (req, res) => {
    const request = req.params.shortURL;

    if(request) {
        const db = require('../../controllers/shortURL');
        db.findOneByShortURL(request, res);


    } else {
        return console.log("Not found");
    }
}

module.exports = {getShortURL}