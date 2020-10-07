const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlShortener = require('./src/api/shorturl/new/index');

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
})

app.use(express.static(__dirname+"/public"));
// Mount body-parser middleware
app.use(bodyParser.urlencoded({extended:false}));

app.post("/api/shorturl/new", (req, res) => {
    urlShortener.shortenURL(req, res);
})

// Listen for requests
var listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
})