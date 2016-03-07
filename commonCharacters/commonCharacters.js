/**

 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.

 */

var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var count = 1;
  var commonChars = {};
  var resultObj ={};
  
  // loop through all chars of string 1 and put into an obj
  for (var i=0; i<string1.length; i++){
    if (!commonChars[string1[i]]){
      commonChars[string1[i]] = count;
      count++;
    }
  }

  // loop through all chars of string 2 and put any matches into a new obj
  for (var i=0; i<string2.length; i++){
    if (commonChars[string2[i]]){
      resultObj[[string2[i]]] = commonChars[string2[i]];
    }
  }

 console.log("the chars obj: ", resultObj );

  // loop through the first string and see if any of the values are in the resultObj
  var returnString = "";
  for (var i=0; i<string1.length; i++){
    if (resultObj[string1[i]]){
      returnString += string1[i];
    }
  }
   console.log("FINAL STRING: ", returnString);
   return returnString;  // DONE, ignore the rest

   // NOTE: Below is my original way to get the final string, but it is
   // less efficient solution, so its not getting used.
  // console.log("The matches:", resultObj)

  // var array = [];
  // for (letter in resultObj){
  //   array[resultObj[letter]] = letter;
  // }



  // var  finalArray = [];

  // for (var i=0; i<array.length; i++){
  //   if(array[i] !== undefined) {
  //     finalArray.push(array[i])
  //   }
  // }

  // //console.log("final array: ", finalArray)
  // var string;
  // string = finalArray.toString();
  // console.log(string);

  // return string
  //console.log(resultObj);
};


commonCharacters('ace#xivou', 'aegho#bu');
