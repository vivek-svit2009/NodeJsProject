module.exports = (app) =>{
    const stocks = require('../controllers/stock.controller');

    app.post('/stocks', stocks.create);

    app.get('/stocks', stocks.findAll);

    app.get('/stocks/:stockId', stocks.findOne);

    app.put('/stocks/:stockId', stocks.update);

    app.delete('/stocks/:stockId', stocks.delete);
}