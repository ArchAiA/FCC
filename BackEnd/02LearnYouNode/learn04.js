// var fs = require('fs');
//
// fs.readFile(process.argv[2], function read(err, data) {
// 	if(err) {
// 		throw err;
// 	}
//
// 	var buf = data;
// 	var str = data.toString();
// 	var arr = str.split('\n');
// 	console.log(arr.length - 1);
// })







var fs = require('fs');

var buf;
var str;
var arr = [];

fs.readFile(process.argv[2], function callback(err, data) {
  if(err) {
    throw err;
  }

  buf = data;
  str = buf.toString();
  arr = str.split('\n');
  console.log(arr.length - 1);
});
