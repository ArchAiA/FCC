
function binaryAgent(str) {
  returnStr = "";
  returnArr = [];
  decArr = [];
  newArr = [];
  newArr = str.split(' ');

  for(var i=0; i < newArr.length; i++) {
    dec = parseInt(newArr[i], 2);
    decArr.push(dec);
    returnArr.push(String.fromCharCode(decArr[i]));
    returnStr = returnArr.join('');
  }
  return returnStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
