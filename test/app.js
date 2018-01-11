const http = require('http');

const hostname = '127.0.0.1';
const port = 8900;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

function myFunc(arg) {
  console.log(`arg was => ${arg}`);
}

setTimeout(myFunc, 1500, 'funky');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});