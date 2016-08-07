var fs = require('fs');
var filteredList = [];

fs.readdir(process.argv[2], function callback(err, data) {
  if(err) {
    console.log('error');
  }else {
    for(var i = 0; i < data.length; i++){
      if(data[i].indexOf('.' + process.argv[3]) >= 0) {
        console.log(data[i]);
      }
    }
  }
});
