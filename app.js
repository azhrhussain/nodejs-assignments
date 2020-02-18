const http = require('http');
const fs = require('fs');
const readFile = fs.readFileSync('./logger.js', 'utf8');
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end(readFile);
});

server.listen(5000, () => {
    console.log('Server is running at 5000')
});