var dirFilter = require('./learn05b');
var fs = require('fs');

// console.log(process.argv);
var dirName = process.argv[2];
var extName = process.argv[3];

dirFilter(dirName, extName, function(err, data) {
  if(err) {
    throw new Error('Error');
  } else {
    for(var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }

})
