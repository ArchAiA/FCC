var fs = require('fs');


var arr = [];


module.exports = function(dir, ext, callback) {
  if(err) throw(err);
  extToMatch = '.' + ext;

  fs.readDir(dir, function(err, files) {
    if(err) throw(err);

    if(files[i].slice(0 - extToMatch.length) == extToMatch) {
      arr.push(files[i]);
  })
}
}
