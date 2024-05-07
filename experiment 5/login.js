var http = require('http');
var url = require('url');
var querystring = require('querystring');

function onRequest(req, res) {
  var path = url.parse(req.url).pathname;
  console.log('Request for ' + path + ' received');
 
  var query = url.parse(req.url).query;
  console.log(query);
  var params = querystring.parse(query);
  var username = params["username"];
  var id = params["id"];
  var branch = params["branch"];
  var mobileNo = params["phno"];
  var gender = params["gender"];
  var branchadd = params["branchadd"];

  // HTML content for displaying the message in a table
  var htmlResponse ="
    <html>
    <head>
    <title >User Details</title>
    <style>
      table {
        font-family: Arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        margin: 20px auto;
	border: 3px solid black;
      }
      td, th {
        border: 3px solid black;
        text-align: center;
        padding: 8px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
    </head>
    <body>
    <h2 style="text-align:center;color:red">User Details</h2>
    <table>
      <tr>
        <th>LABEL</th>
        <th>DETAILS</th>
      </tr>
      <tr>
        <td>EMPLOYEE NAME</td>
        <td>${username}</td>
      </tr>
      <tr>
        <td>EMPLOYEE ID</td>
        <td>${id}</td>
      </tr>
      <tr>
        <td>BRANCH</td>
        <td>${branch}</td>
      </tr>
      <tr>
        <td>PHONE NUMBER</td>
        <td>${mobileNo}</td>
      </tr>
      <tr>
        <td>GENDER</td>
        <td>${gender}</td>
      </tr>
      <tr>
        <td>ADDRESS</td>
        <td>${branchadd}</td>
      </tr>
    </table>
    </body>
    </html>
  ";
 
  // Write the HTML response
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(htmlResponse);
  res.end();
}

http.createServer(onRequest).listen(8000);
console.log('Server is running...');
