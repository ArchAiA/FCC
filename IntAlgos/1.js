//(use 'esversion:6')

function sumAll(arr) {
 var total = arr[0] + arr[1];
 var top = Math.max(arr[0], arr[1]);
 var bottom = Math.min(arr[0], arr[1]);
 sumTotal = 0;

 for(var i=bottom; i<top+1; i++) {
   sumTotal += i;
 }

 return sumTotal;

}

sumAll([1, 4]);
