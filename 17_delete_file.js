var http = require('http')
var fs = require('fs')
var url = require('url')

var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true)
    var filename = requested_url.pathname.substring(1)
    console.log(filename);
    fs.unlink(filename,function(error)
    {
        if (error!==null) {
            response.write('file can not be deleted ');
            response.end()
        }
        else{
            response.write('file deleted successfully')
            response.end()
        }

    })    
})
server.listen(5000)
console.log('ready to accept request');