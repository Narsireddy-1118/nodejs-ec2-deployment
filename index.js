const http = require('http');

const hostname = '0.0.0.0';  // Listen on all IPs, including public IP
const port = 3000;  // Port to listen on

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
