//http.get emits three events "data", "error", and "end"
var http = require('http');

var dataArray = [];
var returnStr;
var returnStrCount;

http.get(process.argv[2], function callback(response) {

  response.on("data", function(data) {
    // console.log(data.toString());
    dataArray.push(data.toString());
    // console.log(dataArray);

  });


  response.on("end", function printAll() {
    // console.log(dataArray);
    returnStr = dataArray.join('');
    returnStrCount = returnStr.length;
    console.log(returnStrCount);
    console.log(returnStr);
  });

})
