/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */



// Test case: [1,2,-5, 4]
// possiblities:
/* 
1
2
-5
4

1,  2    (meaning 1+2)
2,  -5
-5, 4  

1,  2, -5
2, -5,  4

1,  2, -5, 4
*/

// Go through the input array and check all contiguous sum possibilities 

var sumArray = function(array) {
  // Create a variable to hold the largest sum found
  var largestSumFound = 0;
  // loop thru all possiblities and keep track of the largest sum found

  // check for individual element sums
  for (var i=0; i<array.length; i++){
    if (array[0]>largestSumFound){
      largestSumFound = array[0];
    }
  }

  // add up all elements and check that versus the largest
  var sumOfAllElements = 0;
  for (var i=0; i<array.length; i++){
    sumOfAllElements+=array[i];
  }
  if (sumOfAllElements>largestSumFound){
    largestSumFound = sumOfAllElements;
  }


return largestSumFound;
};