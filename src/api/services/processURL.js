const {verifyURLFormat} = require('./verifyURLFormat');
const {getHostName} = require('./getHostName');
const {invalidResponse} = require('./invalidResponse');
const {saveURL} = require('./saveURL');
const dns = require('dns');

/**
 * Process original_url from the POST request
 * 
 * @param {Request}  req  the original url posted in the request
 * @param {Response} res  the response to the request
 * 
 * @returns {String} 
 * 
 */
const processURL = (req, res) => {

    const reqURL = req.body.urlToShorten;

    let domainURL = verifyURLFormat(reqURL, res);
    domainURL = getHostName(domainURL);

    if(domainURL) {    
        dns.lookup(domainURL, (err) => {
            if(err) {
                return invalidResponse(res);     
            } else {
                saveURL(reqURL, res);                           
            }
        });
    }
}

module.exports = {processURL}