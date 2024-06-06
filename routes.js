const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>nothing on this page</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>This is about us page</h1>");
    } else if (req.url === "/contact") {
        res.end("<h1>This is contact us page</h1>");
    } else {
        res.end("<h1>Page not found</h1>"); // Handle other routes
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
