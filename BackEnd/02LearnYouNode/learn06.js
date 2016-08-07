var http = require('http');

http.get(process.argv[2], function callback(response) {
  response.on("data", function(data) {
    var str = data.toString();
    console.log(str);
  })

})
