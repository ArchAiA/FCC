const http = require('http');
const url = require('url');

var server = http.createServer(function(req, res) {
  var parsedURL = url.parse(req.url, true);
  var time = Date.parse(parsedURL.query.iso);
  var out = {}

  // console.log(parsedURL);
  // console.log(time);
  // console.log(out);

  if(parsedURL.pathname === '/api/parsetime') {
    time = new Date(time);
    out = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    }

  }
  if(parsedURL.pathname === '/api/unixtime') {
    out = {unixtime: time};
  }

  res.end(JSON.stringify(out));

})
server.listen(process.argv[2]);
