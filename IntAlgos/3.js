Solution (COPIED)

//jshint esversion:6

var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};


convertToRoman(36);











































Attempt #1
//jshint esversin:6

function convertToRoman(num) {

  var conversions = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };


  var finalArr = [];

  romArr = Array.from(num.toString());

  for(var i = romArr.length; i > 0; i--) {


  }


  Atmempt #2
  //jshint esversin:6

function convertToRoman(num) {

  var numlist = [1, 5, 10, 50, 100, 500, 1000];

  var conversions = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };


  var finalArr = [];
  var finalString = '';
  var tempArr = 0;

  romArr = Array.from(num.toString());

  for(var i = romArr.length; i > 0; i--) {
    switch(true) {
      case(romArr.length < 2):

      case(romArr.lengh < 3):

      case(romArr.length < 4):

      case(romArr.length < 5):
        tempArr = romArr[i].splice(0,1);
        finalString += correctNumber(romArr[i]);
        break;
    }


  }


    function correctNumber(romanNum) {

    }












  var units = romArr.length;
    switch(true) {
      case(romArr.length < 2):

      case(romArr.lengh < 3):

      case(romArr.length < 4):

      case(romArr.length < 5):

    }




 return romArr;
}

convertToRoman(36);




  Attempt #3
  //jshint esversin:6

function convertToRoman(num) {

  var numList = [1, 5, 10, 50, 100, 500, 1000];
  var romList = ["I", "V", "X", "D", "C", "L", "M"];
  var numArray = Array.from(num.toString());

  var conversions = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M"
  };







 return numArray;
}

convertToRoman(36);










  var units = romArr.length;
    switch(true) {
      case(romArr.length < 2):

      case(romArr.lengh < 3):

      case(romArr.length < 4):

      case(romArr.length < 5):

    }




 return romArr;
}

convertToRoman(36);
