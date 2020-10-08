require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// schema setup
const shortURLSchema = new mongoose.Schema({
    original_url: {type:String, required: true}
})


// create model
var ShortURL = mongoose.model('ShortURL', shortURLSchema);

// save new record
const createAndSaveURL = (url, done) => {
    
    var newURL = new ShortURL(url);

    newURL.save((err, newURL) => {
        if(err) return console.error(err);
        done(null, newURL);
    })
}

module.exports = {createAndSaveURL};

