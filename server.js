  var http = require('http');
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  var server = http.Server(app);
  var mongo = require('mongodb');
  
  var db, uri = "mongodb://"+process.env.IP+ ":27017";
  
  mongo.MongoClient.connect(uri, {useNewUrlParser:true}, function(err, client){
    if(err){
      console.log('Could not connect to MongoDB');
    }
    else{
      db = client.db('node-cw8');
    }
  });
  
  var save = function(form_data){
    db.createCollection('users', function(err, collection){});
    var collection = db.collection('user');
    collection.save(form_data);
  }
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
    save(req.body);
  });
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });