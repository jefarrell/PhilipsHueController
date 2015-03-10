var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



///////////////////////////
//////  Hue Setup  ///////
/////////////////////////

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var displayError = function(err) {
    console.error(err);
};

var displayStatus = function(status) {
    console.log(JSON.stringify(status, null, 2));
};

// Connect to API
var bulbHost = "128.122.151.166",
    bulbUsername = "A92fSZTJhWlgt3mD",
    api = new HueApi(bulbHost,bulbUsername),
    state = lightState.create();

// Second connection to work with multiple Bridges
var stripHost = "128.122.151.76"
    stripUsername = "24b6cc4d1140b40725c6850938253823"
    apiStrip = new HueApi(stripHost,stripUsername),
    stripState = lightState.create();
////////////////////////////
///////////////////////////




////////////////////////////
//////    Routes    ///////
//////////////////////////
app.use('/', routes);

app.get('/master', function(req, res){
    res.sendFile(__dirname + '/views/master.html');
});

app.get('/table', function(req, res){
    res.sendFile(__dirname + '/views/table.html');
});

app.get('/sec1', function (req, res) {
    console.log("request received");
    res.end();
});

app.get('/readingButton', function (req, res) {
    console.log("reading request received");
    res.end();
    reading();
});

app.get('/dine1', function (req, res) {
    console.log("date request received");
    res.end();
    date();
});


app.get('/dine2', function (req, res) {
    console.log("family request received");
    res.end();
    family();
});

app.get('/dine3', function (req, res) {
    console.log("business request received");
    res.end();
    business();
});

app.get('/tableSlider/:brightness', function(req,res){
    var bright = req.params.brightness;
    console.log("slider level: " + bright);
    res.end();
    tableSlider(bright);
})

////////////////////////////
///////////////////////////



////////////////////////////
/// Lighting Functions ////
//////////////////////////
var reading = function() {
    api.setLightState(1, state.on().transitionTime(25).hsl(70,70,100))
    .then(displayResult)
    .done();

     apiStrip.setLightState(1, state.on().transitionTime(25).hsl(70,70,100))
    .then(displayResult)
    .done();
}

var date = function() {
    api.setLightState(1,state.on().transitionTime(25).hsl(354, 96, 70))
    .then(displayResult)
    .done();

    apiStrip.setLightState(1,state.on().transitionTime(25).hsl(354, 96, 70))
    .then(displayResult)
    .done();
}

var family = function() {
    api.setLightState(1,state.on().transitionTime(25).hsl(35,100,70))
    .then(displayResult)
    .done();

    apiStrip.setLightState(1,state.on().transitionTime(25).hsl(35,100,70))
    .then(displayResult)
    .done();
}

var business = function() {
    api.setLightState(1, state.on().transitionTime(25).hsl(185, 96, 30))
    .then(displayResult)
    .done();

    apiStrip.setLightState(1, state.on().transitionTime(25).hsl(185, 96, 90))
    .then(displayResult)
    .done();
}

var tableSlider = function(value) {
    api.setLightState(1, state.on().bri(value))
    .then(displayResult)
    .done();

     apiStrip.setLightState(1, state.on().bri(value))
    .then(displayResult)
    .done();
}
////////////////////////////
///////////////////////////



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

    

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
