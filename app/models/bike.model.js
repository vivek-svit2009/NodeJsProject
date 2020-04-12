const mongoose = require('mongoose');

const bikeSchema = mongoose.Schema({
    
    bikeModel : {
        type:String,
        required: true,
        unique: true
    }
},
    {
        timestamps : true
    
});
module.exports = mongoose.model('Bikes',bikeSchema);