Solution



function sumPrimes(num) {
  sumTotal = 0;
  for(var i=2; i <= num; i++) {
    if(isPrime(i)) {
      sumTotal += i;
    }
      }

  return sumTotal;

}





function isPrime(val) {
  for(var j=2; j<val; j++) {
    if(val % j === 0) {
      return false;
    }
  }
  return true;
}


sumPrimes(10);
