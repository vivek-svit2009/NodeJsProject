const Stock = require('../models/stock.model');
const Bike = require('../models/bike.model');

exports.create = (req,res)=>{
    if(!req.body.engineNo) {
        return res.status(400).send({
            message: "Note engineNo can not be empty"
        });
    }
    async function fun(req,res){
        let bii =   Bike.findOne({"bikeModel": req.body.vehicleModel})._id;
        return bii;
    }
  
    // Bike.findOne({"bikeModel": req.body.vehicleModel}).exec(function(err,data){
    //     const stock = new Stock({
    //         vehicleModelid: data._id,
    //         challanNo: req.body.challanNo,
    //         engineNo: req.body.engineNo,
    //         chachisNo: req.body.chachisNo,
    //         exshowRoomprice: req.body.exshowRoomprice,
    //         onRoadprice: req.body.onRoadprice,
    //     });
    
    //     // Save Note in the database
    //     stock.save()
    //     .then(data => {
    //         res.send(data);
    //     }).catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating the Stock."
    //         });
    //     });
    // })
    const stock = new Stock({
                vehicleModelid: fun(),
                challanNo: req.body.challanNo,
                engineNo: req.body.engineNo,
                chachisNo: req.body.chachisNo,
                exshowRoomprice: req.body.exshowRoomprice,
                onRoadprice: req.body.onRoadprice,
            });
        
            // Save Note in the database
            stock.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Stock."
                });
            });
   
};
exports.findAll = (req,res)=>{
    Stock.find()
    .then(stockes => {
        res.send(stockes);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Bikes."
        })
    });
};
exports.findAll = (req,res)=>{
 
};
exports.findOne = (req,res)=>{

};
exports.update = (req, res)=>{

};
exports.delete = (req,res)=>{

};