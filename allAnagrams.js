/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 */

 // SOLVED.  My solution does not contain duplicates.
 // Time complexity: o(n^2)
 // Solution explained at the end of this file

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */



var findAnagrams = function (arr){ // arr is an array of the string elements
  var anagramList = [];

  // add the initial array to the list (convert it back to a string first)
  var firstAnagram = arr.join("");
  anagramList.push(firstAnagram);
  var currentAna = "";

  // remove the first char (to be concated with all combinations of the remaining letters)
  var first = arr.shift();

  // make a copy of the arr, for resetting purposes
  var origArr = arr.slice(0);


  // loop thru the arr and find the anagrams and concat tham with the first char
  for (var i=0; i<arr.length-1; i++){
    for (var j=i; j < arr.length-1; j++){
      swapWithNext(arr, j, j+1);
      currentAna = first + arr.join("");
      anagramList.push(currentAna);
    }
      // set arr back to what it was
      arr = origArr.slice(0);
  }
  return anagramList;
};


var allAnagrams = function(string) {
  var anagramsFound = [];
  var totalAnagrams = [];

  // split string into an array
  var strArr = string.split("");

  // loop through the strArr
  // swap the element[0] with element[i]
  for (var i=0; i<strArr.length; i++){
    swapWithNext(strArr, 0, i)

    // now recurse to get the anagrams for that string
    anagramsFound = findAnagrams(strArr);

    // loop through the returned list of anagrams and add each one to the total anagrams list
    anagramsFound.forEach(function(ana){
      totalAnagrams.push(ana);
    });

    // reset the stringArray back to the original form
    strArr = string.split("");
  };

  return totalAnagrams;
  }



// helper function
var swapWithNext = function (arr, i, j){
  // i = index to swap
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(allAnagrams('abcde'));


/* My approach:
 (shift the second letter (b) from left to right)
  abcde
  acbde
  acdbe
  acdeb

  reset the string to abcde
  (shift the third letter (c) from left to right)
  abdce
  abdec

  reset the string to abcde
  (shift the d (fourth letter) from left to right)

  e will be skipped because it the last letter

  repeat the process, but now b is the first letter
  bacde
  bcade
  bcdae
  bcdea

  and so on...

*/

