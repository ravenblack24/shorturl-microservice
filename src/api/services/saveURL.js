/**
 * Validate format of original url
 * 
 * @param {Request}  original_url  the original url posted in the request
 * @param {Response} res           the response to the request
 * 
 * @returns {String} 
 * 
 * @throws {Error}
 */
var saveURL = (url, res) => {
    var {createAndSaveURL} = require('../controllers/index');
    createAndSaveURL({"original_url": url}, res); 
}

module.exports = {saveURL}