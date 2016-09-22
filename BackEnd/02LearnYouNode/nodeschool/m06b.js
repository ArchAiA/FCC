function ls_filter(dir_name, file_ext, callback) {
  fs = require('fs');

  fs.readdir(dir_name, ret_list);

  function ret_list(err, list){
    var new_list = []
    if (!err){
      for (var j = 0; j < list.length; j++){
        if (list[j].split('.').pop() == file_ext && list[j].length > file_ext.length){
          new_list.push(list[j]);
        }
      }
      return callback(null, new_list);
    }
    return callback(err);
  }
}

module.exports = ls_filter
