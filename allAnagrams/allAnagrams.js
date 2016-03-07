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

var allAnagrams = function(string) {
  // Your code here.
  // console.log(string.length)
  // keep track of the stringth length
  var length = string.length;
  var anagramsArr = [];
  // create an array variable to hold the anagrams
  var singleAnagram = [];
  var takenLetters = {}

  for (var i=0; i<string.length; i++){
    takenLetters[string[i]]=false;
  }

  var danger =0;
  // recursive function
  var findAnagrams = function(inputStr){
            if (danger> 200) {
              console.log("Stack overflow");
              return
            }   else {danger++}

    for (var i=0; i<length; i++){
      if (takenLetters[inputStr[i]] !== true){
        
        singleAnagram.push(inputStr[i]);
        takenLetters[inputStr[i]] = true;
        //console.log("taken letters: ", takenLetters)

        if(singleAnagram.length === length){
          console.log("anagram faound: ", singleAnagram)
          anagramsArr.push(singleAnagram);
          singleAnagram = [];
          takenLetters[inputStr[i]] = false;
         // console.log("taken letters: ", takenLetters)

          return;
        }

        findAnagrams(inputStr);
        //takenLetters[inputStr[i]] = false;

      }
      
     } 
    
  	
  }
  // pass the entire string into a recursive function
 findAnagrams(string);


	// return the array of anagrams
	return anagramsArr;
};

console.log(allAnagrams('abc'));
