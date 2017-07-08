const express = require('express'),
    path = require('path'),
    router = express.Router(),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    app = express();

// Static
app.use(express.static(path.resolve(__dirname, '../', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || process.env.NODE_ENV === 'test' ? 'mongodb://localhost/eLecture-test' : 'mongodb://localhost/eLecture';

// Session
app.set('trust proxy', 1);
app.use(session({
    secret: process.env.SESSION_SECRET || 'UC Berkeley EECS',
    store: new MongoStore({
        url: db
    }),
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

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

// Models
require('./models/models');

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Routes
require('./config/routes')(router);
app.use('/', router);

// Server
app.listen(port, function (error) {
    if (error) {
        return console.log(error);
    }

    console.log("Express server listening on port " + port);
});

module.exports = app;
