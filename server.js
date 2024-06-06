var http = require('http');
const server = http.createServer((req, res) => 
{
    res.end("jay mataji");
});
server.listen(5000, "127.0.0.1");
console.log("server is ready");

