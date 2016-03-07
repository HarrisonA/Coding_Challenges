/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // Create a variable array to hold the words of that number
  number = this; 

  var numberArrayOfStrings = [];


  //  Case of 1-19
  // if the number is less than 20
    // look for the key that matches that number in numbersToWord object
    // return the value

  if(number<0){ 
    console.log("Can't do neg numbers YET!");
    return;
  }
  if (number<20){
    console.log("the number is: ",number, numbersToWords[number]);
    return numbersToWords[number];
  }


  // case of multiples of 10 between 10 and 90
  // if the number is > 20 and < 100 and has modulo zero
    // look for that key in numbersToWord object
    // return that value

  if ((number>19)  && (number<100)  && (number%10===0)){
    console.log("the number is: ",number, numbersToWords[number]);
    return numbersToWords[number];
  }

  // Case of all other numbers
  // Solution
  // Find the largest multiple of 10^n  that divides into the number and the result is 
  /* greater than zero
     Example:  1131 / 1000 = (number greater that one)
     Example:  1131 / 10000 = (number less than one)  
  
     // when you find that number, look it up in the numbersToPlace object
     // place that in our result array variable
*/

var recursiveSearch = function(number){

  if (number<20){
    numberArrayOfStrings.push(numbersToWords[number]);
    return;
  }

  console.log ("number to check: ", number);
  var largest10exponent = 10;
  var largestFound = undefined;

  while( (number/largest10exponent) > 1 ){
    largestFound = largest10exponent;
    largest10exponent = (largest10exponent*10);
    console.log("largestfound", largestFound);
  }

  // Get the leading number as put it in a variable
  // Example 323 / 100 === 3.23 so just get the three by rounding down
  var startNum = Math.floor(number/largestFound);
 console.log("leading number", startNum);  
  // push that number into the array
  numberArrayOfStrings.push(numbersToWords[startNum]);

  // push the largest found 10 multiple into the array
  numberArrayOfStrings.push(numbersToPlace[largestFound]);

  console.log("\n", numberArrayOfStrings);
  
// Find the modulo of the our original number and the largest multiple found from above
  // that modulo now becomes the number 
  // repeate the process from above

  if(number%largestFound === 0){
    numberArrayOfStrings.push(numbersToWords[number%largestFound]);
    return;
  } else {
    // CONTINUE HERE!!!!!  SOLA
    recursiveSearch(number%largestFound);
  }
       


}
  // call the recursive function with our number
  recursiveSearch(number);



  // create a variable to hold the string of the words of our number
  var numberString="";
  // Loop through the array of number strings concat them into the string variable
  for (i=0; i<numberArrayOfStrings.length; i++){
    numberString+= (" " + numberArrayOfStrings[i]);
  }

  console.log(numberString);
  // return the string variable
};

var bob = 12001;
bob.toEnglish();



