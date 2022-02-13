const mongoose = require('mongoose');


const connecDB = (url) =>{
    console.log('%c Connected to database...', 'color: green; font-weight: bold;');
    return mongoose.connect(url)
}


module.exports = connecDB;