/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var swapChars = function (arr, i){
  // i = index to swap
  var temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;
}

var findAnagrams = function (arr){ // arr is an array of the string elements
  var anagramList = [];

  // add the initial array to the list (convert it back to a string first)
  var firstAnagram = arr.join("");
  anagramList.push(firstAnagram);
  var currentAna = "";

  // remove the first char
  var first = arr.shift();

  // make a copy of the arr, for resetting purposes
  var origArr = arr.slice(0);


  // loop thru the arr and find the anagrams and concat tham with the first char
  for (var i=0; i<arr.length-1; i++){
    for (var j=i; j < arr.length-1; j++){
      swapChars(arr, j);
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
    var temp = strArr[0];
    strArr[0] = strArr[i];
    strArr[i] = temp;

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

console.log(allAnagrams('abcde'));
