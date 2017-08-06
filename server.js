var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var getImage=require('./getImage');
var saveThisCanvas=require('./saveThisCanvas');

var Tasks=('./Tasks');
var app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/getImage',getImage);
app.use('/saveThisCanvas',saveThisCanvas);

app.get('/hello',function(req,res){

res.json({
	"id":"1",
	"name":"dev"
})
});

app.set('view engine', 'ejs'); 

app.get('/',function(req,res){

res.render('./index.ejs')
});


app.set('port', 3000);

app.use(express.static(path.join(__dirname,'')));


var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server on port :' + port);
});
