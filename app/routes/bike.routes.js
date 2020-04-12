module.exports = (app) => {

    const bikes = require('../controllers/bike.controller');

    app.post('/bikes', bikes.create);

    app.get('/bikes', bikes.findAll);

    app.get('/bikes/:bikeId', bikes.findOne);

    app.put('/bikes/:bikeId', bikes.update);

    app.delete('/bikes/:bikeId', bikes.delete);

}