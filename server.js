  var http = require('http');
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var server = http.Server(app);
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  
  app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
  });
  app.get('/about', function(req, res){
    res.sendFile(__dirname+'/about.html');
  });
  app.get('/form', function(req, res){
    res.sendFile(__dirname+'/form.html');
  });
  app.post('/submit_user', function(req, res){
    console.log(JSON.stringify(req.body));
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });