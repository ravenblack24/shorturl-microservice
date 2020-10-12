const saveURL = (url, res) => {
    const saveToDB = require('../../../controllers/shortURL');
    saveToDB.createAndSaveURL({"original_url": url}, res); 
}

module.exports = {saveURL}