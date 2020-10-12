// Init project
const express = require('express');
const app = express();
const URL = require('./src/api/services/index');
const cors = require('cors');

// Serve static resources from public dir
app.use(express.static(__dirname+"/public"));
app.use(cors());

// Parse URL-encoded bodies
app.use(express.urlencoded({extended: false})); 

// Route for index page
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

/**
 * Process user input and return Object
 * 
 * @param {String} shortURL a shorturl code
 * 
 * @returns {Object} Object containing error key value pair or res.redirect to matching original_url
 */
app.get("/api/shorturl/:shortURL?", (req, res) => {
    URL.getOriginalURL(req, res);
});

/**
 * Submit url for shorturl conversion
 * 
 * @param {String} urlToShorten a url in the form https://www.something.com
 * 
 * @returns {Object} Object containing error key value pair or original_url & short_url key value pair
 */
app.post("/api/shorturl/new", (req, res) => {
    URL.processURL(req, res);
});

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});