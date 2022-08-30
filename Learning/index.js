const http = require('http');

var name = "edwin"
const requestListener = function (req, res) 
{
  res.writeHead(200);
  res.end(`Your name is ${name}`);
  //res.end('Go outside!');
  
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(8081);