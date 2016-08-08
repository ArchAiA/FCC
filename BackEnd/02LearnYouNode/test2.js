const http = require('http');
const url = require('url');

console.log(process.argv);


var server = http.createServer(function(req, res) {
  var par = url.parse(req.url, true);
  var unpar = url.parse(req.url);
  console.log(par);
  console.log(unpar)

});
server.listen(process.argv[2]);
