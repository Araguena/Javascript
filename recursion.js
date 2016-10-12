function sumTo(n) {
 if (n != 1) {
   return n + sumTo(n - 1)
 }
  else {
    return n;
  }
}

//Using a cycle
// function sumTo(n) {
//   var result = 0;
//  for (var i = 1; i <= n; i++) {
//    result += i;
// }
//   return result;
// }
console.log(sumTo(4)); //10
console.log(sumTo(100)); //5050


function factorial(n) {
  if (n == 1) {
    return n;
  } else {
  return n * factorial(n -1);
  }
}
console.log(factorial(3)); //6

function fib(n) {
  if (n <= 2) {
   return 1;
  }
  else {
   return fib(n - 1) + fib (n - 2);
  }
}
