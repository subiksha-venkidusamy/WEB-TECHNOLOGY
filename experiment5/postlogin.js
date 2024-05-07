var http = require('http');
var querystring = require('querystring');

function onRequest(req, res) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var params = querystring.parse(body);
      var username = params["username"];
      var id = params["id"];
      var branch = params["branch"];
      var mobileNo = params["phno"];
      var gender = params["gender"];
      var branchadd = params["branchadd"];

      // HTML content for displaying the message in a table
      var htmlResponse = `
        <html>
        <head>
        <title>employee Details</title>
        <style>
        body
        {
          font-family: Arial, sans-serif;
         }
       
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
 
        h2{
          text-align:center;
          color:red;
          padding:40px;
        }
       
        </style>
        </head>
        <body>
        <h2>Employee Details</h2>
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
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
      `;

      // Write the HTML response
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(htmlResponse);
      res.end();
    });
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Method not allowed');
  }
}

http.createServer(onRequest).listen(8060);
console.log('Server is running...');
