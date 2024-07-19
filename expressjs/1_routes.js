var express = require('express')
var app = express()
const route = '/express';

app.get(route,function(request,response)
{
    response.send('Request is received')
})

const portno = 5000
app.listen(portno,function(error)
{
    if(error)
        console.log(error);
    else
        {
       console.log('ready for accept request');     
        }
})