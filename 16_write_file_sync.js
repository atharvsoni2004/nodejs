var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true)
    var filename = requested_url.pathname.substring(1)
    var data = requested_url.query
    var output = ''
    if (data.name1 === undefined || data.name2 === undefined) {
        output = `input is missing`
    }
    else{
        output = `name1 = ${data.name1} and name2 =${data.name2}`
    }
    fs.writeFileSync(filename,output,'utf-8')
    response.write(output)
    console.log('data added');
    response.end()
})

server.listen(5000)
console.log('ready to accept request');