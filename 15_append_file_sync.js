var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true)
    var filename = requested_url.pathname.substring(1)
    console.log(filename);
    var data = requested_url.query
    var output = ''
    if (data.name1 === undefined || data.name2 === undefined) {
        output = `input is missing`
    }
    else{
        output = `name1 = ${data.name1} and name2 is = ${data.name2}`    
    }
    fs.appendFileSync(filename,output,'utf-8')
    response.write('Data is writted into file')
    response.end()
})

server.listen(5000)
console.log('server is ready to accept request');