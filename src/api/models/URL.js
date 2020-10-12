require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const shortid = require('shortid');

// Schema setup
const shortURLSchema = new mongoose.Schema({
    original_url: {type:String, required: true},
    short_url: {type:String, 'default': shortid.generate}
})

// Export function to create 'ShortURL' model class
module.exports = mongoose.model('ShortURL', shortURLSchema);