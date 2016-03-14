/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */



var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return;
  }

    // 1, 2, and 3 are prime numbers, so return true if we find them
  if ((n===1) || (n===2) || (n===3)){
    return true;
  }

  // starting at 2, loop through all numbers up to n
    // check if n modulo that index equals 0
      // if true, return false
  for (var i = 2; i<n; i++){
    if ((n%i)===0){
      return false;
    }
  }
  //if loop completes, return true
  return true;
};

// test 
for (var i=0; i<500; i++){
  if (primeTester(i)){
    console.log(i);
  }
}
console.log("Above are the results");



/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
};


