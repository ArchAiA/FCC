var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);








// var net = require('net');
// var timeArray = [];
// var returnArray = []
//
// var server = net.createServer(function(socket) {
//   var cDate = new Date();
//   timeArray.push(cDate.getFullYear(), cDate.getMonth() + 1, cDate.getDate(), cDate.getHours(), cDate.getMinutes());
//
//   for(var i = 1; i < timeArray.length; i++) {
//     if(timeArray[i] < 10) {
//       timeArray[i] = '0' + timeArray[i];
//     }
//   }
//
//
//   for(var j = 0; j < 2; j++) {
//     returnArray.push(timeArray[j] + '-');
//   }
//   returnArray.push(timeArray[2] + ' ');
//   returnArray.push(timeArray[3] + ':' + timeArray[4]);
//   str = returnArray.join('');
//
//   socket.write(str);
//   socket.end();
// })
// server.listen(process.argv[2]);
