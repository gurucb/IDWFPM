const express = require('Express'); 
const app = express(); 
  
const test = require('./app.js'); 
  
app.use('/', test); 
  
app.listen(3000); 