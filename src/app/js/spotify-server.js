var client_id = '35d508d3020b41e29ef3f8588d7e8b47'; // Your client id
var client_secret = 'edad977926994b46829649c994872833'; // Your secret
var redirect_uri = 'REDIRECT_URI'; // Your redirect uri



/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);