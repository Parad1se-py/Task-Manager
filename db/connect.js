const mongoose = require('mongoose');


const connecDB = (url) =>{
    console.log("Connected to database...");
    return mongoose.connect(url)
}


module.exports = connecDB;