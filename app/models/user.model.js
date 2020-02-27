const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:Object,
    Username:String,
    Password:String
  
}, {
    timestamps : true
});

module.exports = mongoose.model('Users',userSchema);