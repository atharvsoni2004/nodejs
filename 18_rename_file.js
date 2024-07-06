var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer(function (request,response) {
    var requested_url = url.parse(request.url,true)
    var filename = requested_url.pathname.substring(1)
    var newname = 'renamed_file.txt';
    fs.rename(filename,newname,function(error)
    {   
        if(error!==null){  
       response.write('error occured');
       response.end()
        }
       else{
        response.write('file renamed')
        response.end()
       } 
    })
})
server.listen(5000)
console.log('ready to accept request');