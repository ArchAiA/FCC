


























//Attempt #2


function smallestCommons(arr) {

//Find Min and Max
  if(arr[0] < arr[1]) {

    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
//Find Min and Max

//Fill in Missing Numbers
  for(i = min; i <= max; i++) {
    fullArr.push(i);
  }
//Fill in Missing Numbers


//Find Highest Possible LCM
  for(j = 0; j<fullArr.length; j++) {
    highestLCM *= fullArr[j];
  }
//Find Highest Possible LCM

//Find Actual LCM
    for(l = max; l<highestLCM; l+=max) {
      k = 0;
      while(cont) {
        if(fullArr[k] % l === 0) {
          cont = true;
          k += 1;
        } else {
          cont = false;
          k = 0;
        }
      }
      if(cont) {
        return l;
      }
    }



//Find Actual LCM


}
cont = true;
highestLCM = 1;
fullArr = [];
smallestCommons([1,5]);

















//Attempt #1



function smallestCommons(arr) {

//Find Min and Max
  if(arr[0] < arr[1]) {

    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
//Find Min and Max

//Fill in Missing Numbers
  for(var i = min; i <= max; i++) {
    fullArr.push(i);
  }
//Fill in Missing Numbers


//Find Highest Possible LCM
  for(var j = 0; j<fullArr.length; j++) {
    highestLCM *= fullArr[j];
  }
//Find Highest Possible LCM

//Find Actual LCM
    for(var l = max; l<highestLCM; l+=max) {
      for(var k = 0; k<fulArr.length; k++) {
        if(fullArr[k] % l === 0) {

        }
    }
  }

//Find Actual LCM

return highestLCM;

}

highestLCM = 1;
fullArr = [];
smallestCommons([1,5]);
