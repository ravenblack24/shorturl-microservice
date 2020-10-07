const dns = require('dns');

const processURL = (req, res) => {
    const reqURL = req.body.urlToShorten;
    const validURLFormat = /^https?\:\/{2}/;

    if(verifyURLFormat(validURLFormat, reqURL, res)) {

        var domainURL = reqURL.replace(validURLFormat, '');      
        const urlRoutes = /\//;
    
        if(urlRoutes.test(domainURL)) {
            domainURL = domainURL.substring(0, domainURL.indexOf('/'));
        }
    
        dns.lookup(domainURL, (err) => {
            if(err) {
                return invalidResponse(res);     
            }  else {
                res.json({"original_url": reqURL, "short_url": "tbc"});            
            }
        });
    }
}

const verifyURLFormat = (validURLFormat, url, res) => {
    return (!validURLFormat.test(url)) ? invalidResponse(res) : true;   
}

const invalidResponse = (res) => {
    res.json({"error": "invalid URL"});  
}

module.exports = {processURL}