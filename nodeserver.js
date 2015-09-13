var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer(function (request, response) {
  var filePath = "." + request.url;
  if (filePath == "./")
      filePath = "./index.html";

    
  console.log("Request: " + filePath);

  var extname = path.extname(filePath),
      contentType = "text/html";
      
  switch (extname) {
      case ".js":
          contentType = "text/javascript";
          break;
      case ".css":
          contentType = "text/css";
          break;
      case ".json":
          contentType = "application/json";
          break;
      case ".png":
          contentType = "image/png";
          break;      
      case ".jpg":
          contentType = "image/jpg";
          break;
      case ".wav":
          contentType = "audio/wav";
          break;
      case ".svg":
          contentType = "image/svg+xml";
          break;
  }
  
  fs.readFile(filePath, function(error, content) {
      if (error) {
          if(error.code == "ENOENT"){
              fs.readFile("./404.html", function(error, content) {
                  response.writeHead(200, { "Content-Type": contentType });
                  response.end(content, "utf-8");
              });
          }
          else {
              response.writeHead(500);
              response.end("Sorry, check with the site admin for error: "+error.code+" ..\n");
              response.end(); 
          }
      }
      else {
          response.writeHead(200, { "Content-Type": contentType });
          response.end(content, "utf-8");
      }
  });

}).listen(4040);
console.log("Server running at http://localhost:4040/");