const dns = require('dns');

const shortenURL = (req, res) => {

    const requestURL = req.body.urlToShorten;
    const validStartURLFormat = /^https?\:\/{2}/;

    if(!validStartURLFormat.test(requestURL)) {
        res.json({"error": "invalid URL"});   
    }
    else {

        var domainURL = requestURL.replace(validStartURLFormat, '');
        const urlRoutes = /\//;
    
        if(urlRoutes.test(domainURL)) {
            domainURL = domainURL.substring(0, domainURL.indexOf('/'));
        }
    
        dns.lookup(domainURL, (err) => {
            if(err) {
                res.json({"error": "invalid URL"});     
            }  else {
                res.json({"original_url": requestURL, "short_url": "tbc"});            
            }
        });
    }
}

module.exports = {shortenURL}