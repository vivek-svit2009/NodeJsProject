const mongoose = require('mongoose');

const stockSchema = mongoose.Schema({
    vehicleModelid :{
        type:Object,
        required : true,
    },
    challanNo:{
        type:Number,
        required : true,
        unique : true  
    },
    engineNo:{
        type:String,
        required : true,
        unique : true  
    },
    chachisNo:{
        type:String,
        required : true,
        unique : true  
    },
    exshowRoomprice:{
        type:Number,
        required : true,
    },
    onRoadprice:{
        type:Number,
        required : true,
    }


});

module.exports = mongoose.model('Stocks',stockSchema);