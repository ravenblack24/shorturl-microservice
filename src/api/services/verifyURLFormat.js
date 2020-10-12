const {invalidResponse} = require('./invalidResponse');

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
const verifyURLFormat = (original_url, res) => {

    const validURLFormat = /^https?\:\/{2}/;

    if (!validURLFormat.test(original_url)) {
        return invalidResponse(res);
    }
    
    return original_url.replace(validURLFormat, '');
}

module.exports = {verifyURLFormat}