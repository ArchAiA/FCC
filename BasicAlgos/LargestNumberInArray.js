SOLUTION



function largestOfFour(arr) {
var arr2 = [];

  for(i=0; i<arr.length; i++) {
    largest = 0;

    for(j=0; j<arr.length; j++) {
      if(largest < arr[i][j]) {
      largest = arr[i][j];
        }
    }

  arr2.push(largest);

    }

  // You can do this!

  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
