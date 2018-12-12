var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 4002);

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

if( app.thing == null ) console.log( 'bleat!' );

 app.get('/about', function(req, res) { 
     res.render('about', { pageTestScript: '/qa/tests-about.js' }); 
     });
//routes 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/contact', function (req, res) {
    res.render('contact');
});
app.get('/resume', function (req, res) {
    res.render('resume');
});

app.get('/form', function(req, res){ 
    res.render('form'); 
});

//404 catch all handler (middleware)
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

//500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});
