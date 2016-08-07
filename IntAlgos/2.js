Solution

//jshint esversin:6


function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.concat(arr2);

  finalArr = newArr.filter(item => (arr1.indexOf(item) === -1 && arr2.indexOf(item) !== -1)
  ||
  (arr1.indexOf(item) !== -1 && arr2.indexOf(item) === -1));

  return finalArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);













Attempt #1

function diffArray(arr1, arr2) {
  var newArr = [];

  newArr = arr1.concat(arr2);

  function filterer(elem) {
    if(arr1.indexOf(elem) === -1 || arr2.indexOf(elem) === -1) {
      return true;
    }
  }



  // Same, same; but different.
  return newArr.filter(filterer(newArr));
}





diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
