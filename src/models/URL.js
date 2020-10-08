require('dotenv').config({path: '.env'});
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// schema setup
const shortURLSchema = new mongoose.Schema({
    original_url: {type:String, required: true}
})

// Export function to create 'ShortURL' model class
module.exports = mongoose.model('ShortURL', shortURLSchema);