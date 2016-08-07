var http = require('http');
var dataArray = [];


for(var i = 2; i < process.argv.length; i++) {

  http.get(process.argv[i], function callback(response) {

    response.on("data", function(data) {
      dataArray.push(data.toString());
    })

    response.on("end", function() {
      str = dataArray.join('');
      console.log(str);
    })
})

}
