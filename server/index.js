const express = require('express'),
    path = require('path'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || process.env.NODE_ENV === 'test' ? 'mongodb://localhost/eLecture-test' : 'mongodb://localhost/eLecture';

// Database
const connect = function () {
    mongoose.connect(db, function (err) {
        if (err) {
            console.log('Error connecting to: ' + db + '. ' + err);
        } else {
            console.log('Succeeded connected to: ' + db);
        }
    });
};

connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Static
app.use(express.static(path.resolve(__dirname, '../', 'public')));

// Models
require('./models/models');

// Routes
require('./routes')(router);
app.use('/', router);

// Server
app.listen(port, function (error) {
    if (error) {
        return console.log(error);
    }

    console.log("Express server listening on port " + port);
});

module.exports = app;
