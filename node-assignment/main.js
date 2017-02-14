var http = require("http");
var fs = require('fs');

http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, content) {
    response.end(content);
  });
}).listen(8080);

console.log('Server running at http://localhost:8080/');