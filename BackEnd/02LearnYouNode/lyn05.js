var fs = require('fs');

function filterList() {
    // console.log(process.argv[3]);

    var extLength = process.argv[3].length + 1;
    // console.log(extLength);
    var arr = []
    fs.readdir(process.argv[2], function callback(err, data) {
      if(err) {console.log('error')};

      for(item in data) {
        // if data[item].slice(-4) ==
        if(data[item].slice(-extLength) === '.' + process.argv[3]) {
          console.log(data[item]);
        }
      }
    })
}


filterList();
