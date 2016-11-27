const express = require("express");
const app = express();
const path = require("path");
const connectionLogger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require("connect-flash");
const serverLogger = require("./lib/logger");
const config = require("./config");
const exphbs  = require('express-handlebars');
const hbs = require("./lib/handlebars");

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);
app.use(express.static(path.join(__dirname, '../public')));
app.use(connectionLogger("dev"));
app.use(cookieParser());
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true,
}));

app.use('/', require("./routes/home"));
app.use('/orsm', require("./routes/orsm"));
app.use('/sheet', require("./routes/sheet"));

// catch 404 and handle it
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers
// development envrionment only
if (app.get("env") === "development") {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err,
        });
    });
}

// production handler, no stack trace leak to users
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {},
    });
});

module.exports = app;
