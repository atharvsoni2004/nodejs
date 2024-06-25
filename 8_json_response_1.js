var http = require('http')
const { version } = require('os')

var server = http.createServer(function(request,response)
{
    response.writeHead(200,{'content-type':'test/html'})
    var url = request.url
    var output = null
    if (url === '/reactjs') {
        output={
                    success:'yes',
                    libraryName:'React',
                    version : '16.8.1'
              }
    }

})

server.listen(5000)
