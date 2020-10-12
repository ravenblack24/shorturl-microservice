const {verifyURLFormat} = require('./verifyURLFormat');
const {getHostName} = require('./getHostName');
const {invalidResponse} = require('./invalidResponse');
const {saveURL} = require('./saveURL');

const dns = require('dns');

const processURL = (req, res) => {

    const reqURL = req.body.urlToShorten;

    let domainURL = verifyURLFormat(reqURL, res);
    domainURL = getHostName(domainURL, res);

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