const {processURL} = require('./processURL');
const {verifyURLFormat} = require('./verifyURLFormat');
const {getHostName} = require('./getHostName');
const {invalidResponse} = require('./invalidResponse');
const {saveURL} = require('./saveURL');
const {getOriginalURL} = require('./getOriginalURL');

module.exports = {processURL, verifyURLFormat,getHostName,invalidResponse,saveURL,getOriginalURL}