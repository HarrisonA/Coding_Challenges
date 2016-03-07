//console.log("test");
/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


// input is number
// input possiblilities:  0,    1,     18,  999,  9501

//MVP solution
// check to see how many digits are in the input
 // if one, 
  //then do a simple loop
 // if two,
  //then two loops are needed
// if three,
  // then three loops are needed
// if four,
  // then four loops are needed


// output is an array of strings (or just a console log) that represent all possible word combinations

var numLookUp = function (num){
  //return a string of the num
  return (phoneDigitsToLetters[num]);
}

var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var allCombosArr = [];
  var numString = digitString.toString();

  if (numString.length === 1){
    // call helper function that will return the string of the letters for that number 
    var str = numLookUp(numString);

    for (var i=0; i<str.length; i++){
      allCombosArr.push(str[i]);
    }
    return (allCombosArr);
  }

  if (numString.length === 2){
    
  }

  
};


console.log(telephoneWords(9));
