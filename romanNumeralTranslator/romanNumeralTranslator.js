
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};


var translateRomanNumeral = function(romanNumeral){
  // TODO: Implement me!

  // create a variable to keep track of the numbers
  // create a varibble to keep track of the prev number

  // loop through the input string
  //  //look up the roman numeral in the object
      // check if the number is less than the previous number
        // if so subtract out that prev number form the total and add its negative plus the current number

  var total = 0;
  var prev = 0;
  var curr = 0;

  for (var i = 0; i < romanNumeral.length; i++) {
    curr = DIGIT_VALUES[romanNumeral[i]];

    if(curr>prev && i!==0){
      total = total - prev;
      total = total + (curr-prev);
    } else {
      total = total + curr;
    }

    prev = curr;
  };
    
  console.log(total);

  };

translateRomanNumeral("LX")

