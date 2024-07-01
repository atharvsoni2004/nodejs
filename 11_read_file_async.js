var http = require('http')
var file = require('fs')
var server = http.createServer(function(request,response)
{
    let requested_url = request.url
    let filename = requested_url.substring(1)
    file.readFile(filename,function(error,content)
   {
    if (error !== null)
        {
            response.writeHead(404,{'content-type':'text/html'})
            response.write(`<h1>File not found</h1>`)
            response.end()
        }
        else{
            response.writeHead(200,{'content-type':'text/html'})
            response.write(content)
            response.end()
        }
   })    
})

server.listen(5000)
console.log('ready to accept request');

