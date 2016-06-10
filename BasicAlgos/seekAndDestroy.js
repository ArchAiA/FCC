
Solution

function destroyer(arr) {

args = Array.from(arguments);
filts = args.slice(1,args.length);


  arr2 = arguments[0].filter(function(element, index) {
    toReturn = true;

    for(var i=0; i<filts.length; i++) {
      if(element === filts[i]) {
        toReturn = false;
      }
    }
    return toReturn;

  });

  return arr2;

}



destroyer([1, 2, 3, 1, 2, 3], 2, 3);







Attempt #1

function destroyer(arr) {
  // Remove all the values
  temp = arr;
  args = Array.from(arguments);

  arr2 = args[0].filter(function (el) {
    for(j=0; j<args[0].length; j++) {
      for(i=1; i<args.length; i++) {
        return (el !== args[i]);
    }
    }
  });

  return arr2;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



ATtempt #2


function destroyer(arr) {
  // Remove all the values
  temp = arr;
  args = Array.from(arguments);
  filts = args.slice(1,args.length);

  survived = temp.filter(function(el, index) {
    toReturn = true;

    for(i=0; i<filts; i++) {
      if(el === filts[i]){
        toReturn = false;
      }
    }
    return toReturn;

  });
   return survived;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
