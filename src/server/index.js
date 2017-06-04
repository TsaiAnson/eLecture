var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    app = express();

var port = process.env.PORT || 3000;
var db = process.env.MONGODB_URI || 'mongodb://localhost/eLecture';

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

// Routes
require('./routes')(app);
app.use('/', router);

// Server
app.listen(port, function (error) {
    if (error) {
        return console.log(error);
    }

    console.log("Express server listening on port " + port);
});

module.exports = app;
