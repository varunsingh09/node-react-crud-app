var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(bodyParser.json())
app.use(cors({origin: '*'}));


// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

require('./app/routes/customer.routes.js')(app);


// Create a Server
var server = app.listen(8005, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://127.0.0.1", host, port)

})