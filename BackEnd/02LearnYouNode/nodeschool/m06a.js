var ls_filter = require('./m06b.js');
fs = require('fs');

dir_name = process.argv[2];
file_ext = process.argv[3];

ls_filter(dir_name, file_ext, cb)

function cb(err, data){
  if(err) throw(err);
  } else {
    for (var i = 0; i < data.length; i ++){
      console.log(data[i]);
    }
  }
}
