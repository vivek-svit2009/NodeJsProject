const Bike = require('../models/bike.model');

exports.create = (req,res)=>{
    if(!req.body.bikeModel) {
        return res.status(400).send({
            message: "Note bikeName can not be empty"
        });
    }
    const bike = new Bike({
        bikeModel: req.body.bikeModel,
    });

    // Save Note in the database
    bike.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Bike."
        });
    });
};
exports.findAll = (req,res)=>{
    Bike.find()
    .then(bikes => {
        res.send(bikes);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Bikes."
        })
    });
};
exports.findOne = (req,res)=>{
    Bike.find({"bikeModel" : req.params.bikeId})
    .then(bike => {
        if(!bike) {
            return res.status(404).send({
                message: "Bike not found with id " + req.params.vehicleModel
            });            
        }
        res.send(bike);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.vehicleModel
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.vehicleModel
        });
    });
};
exports.update = (req, res)=>{

};
exports.delete = (req,res)=>{

};