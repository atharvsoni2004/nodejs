var http = require('http')
var fs = require('fs');
var server = http.createServer(function(request,response)
{
    let requested_url = request.url;
    let filename = requested_url.substring(1)
    try {
        response.writeHead(200,{'content-type':'text/html'})
        let filecontent = fs.readFileSync(filename)
        response.write(filecontent)
        response.end()
    } catch (error) {
        response.writeHead(404,{'content-type':'text/html'})
        response.write(`<h1>404 error is occured </h1>`)
        response.end()
    }
})

server.listen(5000)
console.log('ready to accept request');