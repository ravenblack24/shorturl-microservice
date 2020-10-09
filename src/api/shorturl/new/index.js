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

const verifyURLFormat = (url, res) => {

    const validURLFormat = /^https?\:\/{2}/;

    if (!validURLFormat.test(url)) {
        return invalidResponse(res);
    }
    
    return url.replace(validURLFormat, '');
}

const getHostName = (url, res) => {

    if(url) {
        const urlRoutes = /\//;

        if(urlRoutes.test(url)) {
            return url.substring(0, url.indexOf('/'));
        }

        return url;
    }
}

const invalidResponse = (res) => {
    res.json({"error": "invalid URL"});  
}

const saveURL = (url, res) => {
    const saveToDB = require('../../../controllers/shortURL');
    saveToDB.createAndSaveURL({"original_url": url}, res); 
}

module.exports = {processURL}