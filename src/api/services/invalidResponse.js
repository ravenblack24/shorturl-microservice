/**
 * Return Object with error key value pair
 * 
 * @param {Response} res  the response to the request
 * 
 * @returns {String} 
 * 
 */
const invalidResponse = (res) => {
    res.json({"error": "invalid URL"});  
}

module.exports = {invalidResponse}