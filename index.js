const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const port = process.env.PORT || 5000;

require('./app/routes/bike.routes.js')(app);
require('./app/routes/user.routes.js')(app);
require('./app/routes/stock.routes.js')(app);

mongoose.Promise = global.Promise;

const uri = "mongodb+srv://newuser_123:Pass_1122@svb-xx3ci.mongodb.net/ShriVishwakarmaBajaj?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true })
  .then(()=>{
    console.log("Database Connected Successfully");
  }).catch(err => {
    console.log('Not Connected',err);
    process.exit();
  })


app.get('/' , (req , res) => res.json({"Title":"sdjsd adjojdaa askjdka","content":"eqhoiuh weuihihef qiuhdigid"}));

app.listen(port,function(){
    console.log("Running Node Server on " + port);
})

