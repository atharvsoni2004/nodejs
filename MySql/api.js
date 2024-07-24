var express = require('express')
var app = express()
var users = require('./user')
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const ROUTE = '/Contact'
const PORTNO = 5000
app.post ( ROUTE , (request,response) => users.insert(request,response) );
app.put ( ROUTE , (request,response) => users.upedate(request,response) );

app.listen(PORTNO)
console.log('server is ready');