import stringWidth from 'string-width';
import http from 'http';

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain; charset=utf-8'); // <-- KLUCZOWE!
    response.end("Szerokość '古a😂' to: " + stringWidth('古a😂') + ".\n"+"Moduł string-width zapewnia funkcję stringWidth(string)\nktóra oblicza szerokość podanego ciągu znaków.");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
