/**
 * Return just a URL hostname
 * 
 * @param {String}  url  a url to be processed with/without additional routing
 * 
 * @returns {String} 
 * 
 */
const getHostName = (url) => {

    if(url) {
        const urlRoutes = /\//;

        if(urlRoutes.test(url)) {
            return url.substring(0, url.indexOf('/'));
        }

        return url;
    }
}

module.exports = {getHostName}