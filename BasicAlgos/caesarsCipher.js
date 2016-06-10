Solution


function rot13(str) { // LBH QVQ VG!
aCode = [];
strCode = [];

// ASCII CODE GOES FROM A = 65 to Z=90


  for(var i=0; i<str.length; i++) {
    //convert to ascii
      char = str.charCodeAt(i);

      char = char - 13;
      if(char < 65){
        char = char + 26;
      }

      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        char = str.charCodeAt(i);
      }



     aCode.push(char);
  }

  //convert back to arry of decoded letters
  for(var j=0; j<aCode.length; j++) {
    num = String.fromCharCode(aCode[j]);
    strCode.push(num);
  }

  //decode the string


  deCode=strCode.join('');
  return deCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");





















Attempt #1

function rot13(str) { // LBH QVQ VG!

numCode = [];
midCode = [];
endCode = "";

  for(i=0; i<str.length; i++) {
    numCode.push(parseInt(str.charCodeAt(i)) - 13);
    midCode.push(numCode[i].toString());
    endCode = String.fromCharCode(midCode);
  }


  return endCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");




Attemp #2

function rot13(str) { // LBH QVQ VG!

numCode = [];
midCode = [];
endCode = [];

  for(i=0; i<str.length; i++) {
    numCode.push(parseInt(str.charCodeAt(i)));
    midCode.push(numCode[i].toString());
    endCode.push(String.fromCharCode(midCode));
  }


  return endCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


Attempt #3: Encoding is ASCII...





Attempt #4


function rot13(str) { // LBH QVQ VG!
 uCode = [];


  for(var i=0; i<str.length; i++) {
    //convert to ascii
    char = str.charCodeAt(i);
    char = char-13;
    uCode.push(char);
    uCodeString = uCode.join('');


  }


  return uCodeString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");











Attempt #5

function rot13(str) { // LBH QVQ VG!
aCode = [];
strCode = [];

  for(var i=0; i<str.length; i++) {
    //convert to ascii
    char = str.charCodeAt(i);
    char = char;
    aCode.push(char);
  }

  //convert back to string
  for(var j=0; j<aCode; j++) {
    num = String.fromCharCode(aCode[j]);
    strCode.push(num);
  }

  //decode the string




  return aCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");





Attempt #6

function rot13(str) { // LBH QVQ VG!
aCode = [];
strCode = [];

// ASCII CODE GOES FROM A = 65 to Z=90

  for(var i=0; i<str.length; i++) {
    //convert to ascii
    char = str.charCodeAt(i);
    char = char - 13;
    if(char < 65){
      char = char + 26;
    }
    aCode.push(char);
  }

  //convert back to arry of decoded letters
  for(var j=0; j<aCode.length; j++) {
    num = String.fromCharCode(aCode[j]);
    strCode.push(num);
  }

  //decode the string




  return strCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


Attempt #7


function rot13(str) { // LBH QVQ VG!
aCode = [];
strCode = [];

// ASCII CODE GOES FROM A = 65 to Z=90


  for(var i=0; i<str.length; i++) {
    //convert to ascii
      char = str.charCodeAt(i);
      char = char - 13;
      if(char < 65){
        char = char + 26;
      }
      if(char <= 65 || char >= 90) {
        char = str.charCodeAt(i);
      }
     aCode.push(char);
  }

  //convert back to arry of decoded letters
  for(var j=0; j<aCode.length; j++) {
    num = String.fromCharCode(aCode[j]);
    strCode.push(num);
  }

  //decode the string



  console.log(str.charCodeAt());
  return aCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");






Attempt #8

function rot13(str) { // LBH QVQ VG!
aCode = [];
strCode = [];

// ASCII CODE GOES FROM A = 65 to Z=90


  for(var i=0; i<str.length; i++) {
    //convert to ascii
      char = str.charCodeAt(i);
      char = char - 13;
      if(char < 65){
        char = char + 26;
      }
      if(char < 65 || char > 90) {
        char = str.charCodeAt(i);
      }
     aCode.push(char);
  }

  //convert back to arry of decoded letters
  for(var j=0; j<aCode.length; j++) {
    num = String.fromCharCode(aCode[j]);
    strCode.push(num);
  }

  //decode the string


  deCode=strCode.join('');
  return deCode;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
