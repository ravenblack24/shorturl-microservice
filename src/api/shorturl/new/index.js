const dns = require('dns');

const processURL = (req, res) => {

    const reqURL = req.body.urlToShorten;

    let domainURL = verifyURLFormat(reqURL, res);
    domainURL = getHostName(domainURL, res);

    if(domainURL) {    
        dns.lookup(domainURL, (err) => {
            if(err) {
                return invalidResponse(res);     
            }  else {

                const saveToDB = require('../../../models/url');
                saveToDB.createAndSaveURL({"original_url": reqURL}, () => {
                    console.log("ShortURL saved");
                    // return response
                    // res.json({"original_url": reqURL, "short_url": "tbc"}); 
                });
                           
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
            return url.substring(0, domainURL.indexOf('/'));
        }

        return url;
    }
}

const invalidResponse = (res) => {
    res.json({"error": "invalid URL"});  
}

const saveURL = (url, res) => {
    saveToDB.createAndSaveURL(url);
}

module.exports = {processURL}