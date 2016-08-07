//Solution: The problem was that the while statement should reference fib2, and the adjustments can all be taken out of the if statement to condense the code



function sumFibs(num) {
  fib1 = 1;
  fib2 = 1;

  fib = 1;

  while(fib2 <= num) {
    if(fib2 % 2 !== 0) {
      fib += fib2;
    }
    var temp = fib1;
    fib1 = fib2;
    fib2 += temp;
  }



  return fib;
}

sumFibs(25);













//Attempt #2: Infinite Loop... All this does is create a sequence.  It is not summming the odds...


function sumFibs(num) {
  fib1 = 0;
  fib2 = 1;

  fib = 0;

  while(fib <= num) {
    if(fib2 % 2 !== 0) {
      fib = fib1 + fib2;
      fib1 = fib2;
      fib2 = fib;
    } else {
      fib1 = fib2;
      fib2 = fib1 + fib2;
      fib = fib;
    }
   console.log(fib);

  }



  return fib;
}

sumFibs(25);


//Attempt #1: Just Build Out A Fibonacci Sequence

function sumFibs(num) {
  fib1 = 0;
  fib2 = 1;

  fib = 1;
  while(fib <= num) {
    console.log(fib);
    fib = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib;
  }



  return fib;
}

sumFibs(25);
