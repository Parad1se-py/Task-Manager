const mongoose = require('mongoose');


const connectDB = (url) =>{
    console.log('%c Connected to database...', 'color: green; font-weight: bold;');
    return mongoose.connect(url)
}

module.exports = connectDB;