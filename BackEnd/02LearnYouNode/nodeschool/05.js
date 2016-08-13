var fs = require('fs');

var arr = []

fs.readdir(process.argv[2], function callback(err, files) {
  if(err) throw(err);

  matcher = '.' + process.argv[3];

  for(var i = 0; i < files.length; i++) {
    if(files[i].slice(0 - matcher.length) == matcher) {
      arr.push(files[i]);
      console.log(files[i]);
    }
  }

})
