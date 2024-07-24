var express = require('express')
var app = express()
var route = '/contact'
app.get(route,function (request,response) {
    response.send('This is Get Request')
})

app.post(route,function (request,response) {
    response.send('This is Post Request')
})

app.put(route,function(request,response)
    {
        response.send('This is PUT Request')
    })

const PORTNO = 5000
app.listen(PORTNO,function (error) {
    if(error)
        console.log('error ocuured');
    else{
        console.log('server is ready to accept request');
    }
})