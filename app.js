var express = require('express');
module.exports = function(options){
  var app = express();
  
  app.use(express.static(__dirname+'/public'));
  app.get('/',express.static(__dirname+'/public/test-tubes.svg'));
  
  return app;
};
