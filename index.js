const http = require('http');
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Witaj, z serwera node.js !\n');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});