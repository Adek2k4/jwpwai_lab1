const http = require('http');
const fs = require('fs');
http.createServer(function(req, res) {
if (req.url == '/') {
fs.readFile('./titles.json', function(err, data) {
if (err) {
console.error(err);
res.end('titles.json error');
}
else {
const titles = JSON.parse(data.toString());
fs.readFile('./template.html', function(err, data) {
if (err) {
console.error(err);
res.end('template.html error');
}
else {
const tmpl = data.toString();
const html = tmpl.replace('%', titles.join('</li><li>'));
res.writeHead(200, {'Content-Type': 'text/html'});
res.end(html);
}
});
}
});
}
}).listen(8000, "127.0.0.1");