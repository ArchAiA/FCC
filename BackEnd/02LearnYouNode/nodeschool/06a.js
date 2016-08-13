var matcher = require('./06b.js');

var dirName = process.argv[2];
var extName = process.argv[3];

matcher(dirName, extName, function(err, data) {
  if(err) throw(err);

  console.log(arr);


)}




//dirname
//extension
//callback
