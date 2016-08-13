var http = require('http');

http.get(process.argv[2], cb)
  // response.on("data", function(data) {
  //   console.log(data.toString())})

function cb(response){
  response
    .setEncoding("utf8")
    .on("data", function(data) {
    console.log(data);
  })
}
