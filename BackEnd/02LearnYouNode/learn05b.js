var fs = require('fs');


module.exports = function(dirName, extName, callback) {
  var dirList = [];

  fs.readdir(dirName, function(err, fileNameList) {
    if(err) {
      return callback(err);
    } else {
        var extLength = -1 - extName.length;
        // fileNameList.forEach(function(file) {
        //   if(file.slice(extLength) === extName) {
        fileNameList.forEach(function(file) {
            if('.' + extName === file.slice(extLength)) {
              dirList.push(file);
          }
        })
    }
  return callback(null, dirList);
  })

}
