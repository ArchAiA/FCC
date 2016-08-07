Solution

function myReplace(str, before, after) {
  returnArray = [];
  firstLetter = [];

  if(before[0] !== before[0].toUpperCase()) {
    returnString = str.replace(before, after);
    return returnString;
  } else {

    strArray = after.split('');
    strArray.splice(0, 1, after[0].toUpperCase());

    returnWord = strArray.join('');
    returnString = str.replace(before, returnWord);
    return returnString;
  }




}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");





























Attempt #1


function myReplace(str, before, after) {
  returnArray = [];
  firstLetter = [];

  if(before[0] == before[0].toUpperCase()) {
    strArray = after.split('');
    strArray.splice(0, 1, before[0]);

    returnWord = strArray.join('');
    returnString = str.replace(before, returnWord);
    return returnString;

  } else {
      returnString = str.replace(before, after);
  }







}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
