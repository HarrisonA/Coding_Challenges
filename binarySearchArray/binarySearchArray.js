/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  // create a variable to hold the FOUND index and set it to NULL
  var found = null;

  // declare a variable to hold onto the current middle index as recursion occurs
  // Why?  Because when the original array is split for the binary search the
  // new array will now have new indexes
  // Ex:  [1,2,3,4,5,6] -->   5 is at index 4
  // subarray [4,5,6]  --> 5 is now at 1, so when its found the index is 1 when it
  // really should be 1+3
  var refIndex = 0;

  var danger = 0;

  // sub routine that is a binary search
  var recursiveBS = function (subArray) {
    danger++;
    if (danger > 10) return;

    // array length divide by two and round up to get the middle index
    var middleIndex = Math.floor(subArray.length / 2);

    // check and see if the middle index has the target
      // if so set the found variable to the index PLUS the refIndex and return
      // if not see if the target is < than the middle
        // if so call the a recursive binary search with the target and the sub array up to that middle index
        // if not, same as above but with the sub array starting at middle index +1 till the end of the array

    if (subArray[middleIndex] === target) {
      found = middleIndex + refIndex;
      return;
    }

    var tempArr;
    if (subArray[middleIndex] > target){
      tempArr = subArray.slice(0,middleIndex);
      recursiveBS(tempArr);
      return;
    } else {
      tempArr = subArray.slice(middleIndex);
      refIndex += middleIndex;
      recursiveBS(tempArr);
      return;
    }
  };

  // call the sub routine using the array input and target
  recursiveBS(array);

  // return the FOUND variable
  return found;
};

var index = binarySearch([-4, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], -3);

console.log(index)



