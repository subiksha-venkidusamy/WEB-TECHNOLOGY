var http = require("http");
var url = require("url"); // Corrected to lowercase 'url'
var querystring = require("querystring"); // Corrected to 'querystring'

function onRequest(req, res) {
  var path = url.parse(req.url).pathname; // Corrected to 'req.url'
  console.log("Request for " + path + " received.");
  var query = url.parse(req.url).query; // Corrected to 'req.url'
  console.log(query);
  var rollno = querystring.parse(query)["rollno"];
  var name = querystring.parse(query)["name"];
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello " + name + ", your rollno is " + rollno);
  res.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server has started...");
