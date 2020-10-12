const {invalidResponse} = require('./invalidResponse');

const verifyURLFormat = (url, res) => {

    const validURLFormat = /^https?\:\/{2}/;

    if (!validURLFormat.test(url)) {
        return invalidResponse(res);
    }
    
    return url.replace(validURLFormat, '');
}

module.exports = {verifyURLFormat}