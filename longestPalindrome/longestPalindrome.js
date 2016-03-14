/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

function reverse(s){
    return s.split("").reverse().join("");
}


var longestPalindrome = function (string) {
  // var for the longest palandrome 
  var palindrome = "";
  var iStart;
  var iEnd;
  // loop thru the string
  for (var i=0; i<string.length; i++){
    // starting with the first letter, note that index
    iStart = i;
    // loop through the string again and see if that letter exists again
    for (var j=i+1; j<string.length; j++){ 
      if(string[iStart]===string[j]){
        //console.log ("matching letters: ", string[iStart], " <---->", string[j]);
        // if so note that index
        iEnd = j;
        //console.log("start index: " , iStart," end index:", j);
        // check the string between both indexes
        var forward = string.substring(iStart, iEnd+1);
        //for (var k=forward.length-1; k.=0; )
        
        var backward = reverse(forward);



        //console.log("forward: [", forward, "] backward: [", backward, "]");

        if (forward === backward) {
          // if the same forward and back, we have a palindrom
            // check if this palandrome is larger than our current largest palindrome
            // if so, then update the palindrome variable with the new palindrome
          console.log("palandrome found: ", forward);
          if (forward.length > palindrome.length) {
            palindrome = forward;
          }
        }   
      }
              // then continue searching till the end of the string to see if more palindromes exist
            // if not continue searching till the end of the string to see if more palindromes exist
        // if not, continue to the next letter
    }   

  }

  console.log("\n\n\nLargest palindrome: ", palindrome);
  return palindrome;
  // return the largest palandrome
};

//longestPalindrome("dad ")
longestPalindrome("My dad is a racecar athlete");
