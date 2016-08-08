var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;


function printResults() {
  for(var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}


function httpGet(index) {

  http.get(process.argv[index], function(response) {
    response.pipe(bl(function(err, data) {
      if(err){
        return console.error(err);
      }

      results[index-2] = data.toString();
      count++

      if(count == process.argv.length - 2) {
        printResults();
        }
      }

    ))}
  )}


for(var i = 2; i < process.argv.length; i++) {
  httpGet(i);
}
