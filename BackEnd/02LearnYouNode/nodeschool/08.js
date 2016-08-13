var http = require('http');

var url = process.argv[2];
var arr = [];


http.get(url, whatever);

function whatever(response) {
  response
  .on("data", function(data){
    arr.push(data.toString());
  })
  .on("end", function(arr) {
    console.log(arr)
  })
}















// function cb(response) {
//   response
//     .setEncoding("utf8")
//     .on("data", function(data) {
//     arr.push(data);
//   })
//   var str = arr.join('');
//   console.log(arr);
//
// }
