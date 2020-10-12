const getHostName = (url, res) => {

    if(url) {
        const urlRoutes = /\//;

        if(urlRoutes.test(url)) {
            return url.substring(0, url.indexOf('/'));
        }

        return url;
    }
}

module.exports = {getHostName}