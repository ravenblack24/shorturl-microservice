const express = require('express');
const app = express();
const urlShortener = require('./src/api/shorturl/new/index');

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
})

app.use(express.static(__dirname+"/public"));
// Parse URL-encoded bodies
app.use(express.urlencoded({extended: false})); 

app.post("/api/shorturl/new", (req, res) => {
    urlShortener.processURL(req, res);
})

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
})