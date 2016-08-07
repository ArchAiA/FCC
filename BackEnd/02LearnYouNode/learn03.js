//My Furst I/O

var fs = require('fs');

var buf;
var str;
var arr = [];

buf = fs.readFileSync(process.argv[2]);
str = buf.toString();
arr = str.split('\n');

console.log(arr.length - 1);
