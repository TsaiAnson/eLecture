const express = require('express'),
    path = require('path'),
    router = express.Router(),
    mongoose = require('mongoose'),
    app = express();

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/eLecture';

// Database
var connect = function () {
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
