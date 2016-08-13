var fs = require('fs');

var sum = 0;

fs.readFile(process.argv[2], function callback(err, data) {
  if(!err){
    var str = data.toString();
    var arr = str.split('\n');

    console.log(arr.length - 1);
  }
})
