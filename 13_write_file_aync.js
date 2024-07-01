var http = require('http')
var fs = require('fs')
var server = http.createServer(function(request,response)
{
    let filename = 'context.txt'
    let content = 'रात का समय था, गाँव के किनारे पर एक पुरानी, टूटी-फूटी हवेली स्थित थी जिसे भूतिया हवेली कहा जाता था';
    fs.writeFile(filename,content,function(error)
        {
            response.writeHead(200,{'content-type':'text/html'})
            if(error){
            response.write('<h1>error occuring</h1>')
            response.end()
            }
            else{
                response.write('<h1>Done</h1>')
                response.end()
            }
        })
})
server.listen(5000)