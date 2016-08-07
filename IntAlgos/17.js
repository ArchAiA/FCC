//Solution: Kind of Not-The-Right-Way-To-Do-Things, but Whatever, Fuck It.

//jshint esversion:6

function dropElements() {
  arr = arguments[0];
  n = arguments[1];

  for(i=0; i<arr.length; i++) {
    if(n(arr[i]) === true) {
      return arr.slice(i, arr.length);
    }
  }

  arr = [];
  return arr;
  // Drop them elements.
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});








//Attempt #1


//jshint esversion:6

function dropElements() {
  arr = arguments[0];
  n = arguments[1];

  for(i=0; i<arr.length; i++) {
    if(n(arr[i]) === false) {
      arr.shift();
    } else {
      arr.shift();
      return arr;
    }
  }
  // Drop them elements.
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
