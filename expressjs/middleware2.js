var express = require('express')
var now = require('./mydatetime');
var app = express()
const ROUTE = 'contact' 
app.use(function (request,response,next) {
    console.log('this is firstMiddleware');
    let hour = now.getHour()
        if (hour>= 0 && hour<=9) {
            response.send(`<h1>you can not access between 12 am to 11 am</h1>`)
        }
      else
        next()  
})
    app.use(function(request,response){
        console.log('second middleware');
        let method = request.method
        let url = request.url
        let currentdatetime = now.getTime()
        let ip = request.ip
        console.log('method is' + method);
        console.log('url is' + url);
        console.log('current Date and Time is' +currentdatetime);
        console.log('Ip is ', ip);  
        next()
    })

    app.get(ROUTE, function (request, response) {
        response.send('get request received for contact route');
    });
    
    app.post(ROUTE, function (request, response) {
        response.send('post request received for contact route');
    });
    
    app.put(ROUTE, function (request, response) {
        response.send('put request received for contact route');
    });
    
    app.delete(ROUTE, function (request, response) {
        response.send('delete request received for contact route');
    });
    

app.listen(5000)
console.log('server is ready to accept request');