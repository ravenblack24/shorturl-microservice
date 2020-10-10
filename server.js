const express = require('express');
const app = express();
const getURL = require('./src/api/shorturl/index');
const shortenURL = require('./src/api/shorturl/new/index');

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

app.use(express.static(__dirname+"/public"));
// Parse URL-encoded bodies
app.use(express.urlencoded({extended: false})); 

app.get("/api/shorturl/:shortURL?", (req, res) => {
    getURL.getOriginalURL(req, res);
});

app.post("/api/shorturl/new", (req, res) => {
    shortenURL.processURL(req, res);
});


// Listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});