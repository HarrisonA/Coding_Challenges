/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens( '('    );  // false
 *   balancedParens( '()'   ); // true
 *   balancedParens( ')('   );  // false
 *   balancedParens( '(()) ');  // true
 *    (( ))  ()  ((((  )(
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

//MVP solution
var balancedParens = function(input){

  // loop through the string and return false if the first parenths found is a closed parens )
    // if ( found, increase the open parens count by 1
    // if ) found, increase close count by 1,
  // return  if open = closed
  var firstParFound = false;
  var firstBraFound = false;
  var firstCurlFound = false;

  var latest = [];
  var openParCount = 0;
  var closedParCount = 0;

  var openBraCount = 0;
  var closedBraCount = 0;

  var openCurlCount = 0;
  var closedCurlCount = 0;

  var parCount = 0;
  var braCount = 0;
  var curlCount = 0;

  for (var i = 0; i < input.length; i++) {
    if ((input[i] === ')') && !firstParFound && (openBraCount !== 0) && (openCurlCount !== 0)) {
      return false;
    };

    if (input[i] === '}' && !firstCurlFound && (openParCount !== 0) && (openBraCount !== 0)) {
      return false;
    };

    if (input[i] === ']' && !firstBraFound && (openParCount !== 0) && (openCurlCount !== 0)) {
      return false;
    };

    // Check for closing the a type of parens to early
    if (input[i] === ')' &&  latest[latest.length-1] !== '('){
      return false;
    }

    if (input[i] === '}' &&  latest[latest.length-1] !== '{'){
      return false;

    }

    if (input[i] === ']' &&  latest[latest.length-1] !== '['){
      return false;

    }

    // check if found the matching close 
    if (input[i] === ')'){
      closedParCount++;
      if (openParCount === closedParCount){
        latest.pop();
        firstParFound = false;
      }
      continue;
    }


    if (input[i] === ']'){
      closedBraCount++;
      if (openBraCount === closedBraCount){
        latest.pop();
        firstBraFound = false;
      }
      continue;
    }


    if (input[i] === ')'){
      closedCurlCount++;
      if (openCurlCount === closedCurlCount){
        latest.pop();
        firstCurlFound = false;
      }
      continue;
    }

    // Check if first type of parens has been found
    if ((input[i] === '(') && !firstParFound) {
      firstParFound = true;
      latest.push(input[i]);
      openParCount++;
      continue;

    }

    if ((input[i] === '[') && !firstBraFound) {
      firstBraFound = true;
      latest.push(input[i]);
      openBraCount++;
      continue;

    }

    if ((input[i] === '{') && !firstCurlFound) {
      firstCurlFound = true;
      latest.push(input[i]);
      openCurlCount++;
      continue;
    }

    if (input[i] === '(') {
      openParCount++;

    }

    if (input[i] === '[') {
      openBraCount++;
    }

    if (input[i] === '{') {
      openCurlCount++;
    }

  }

  if ((openCurlCount === closedCurlCount) && (openBraCount === closedBraCount) && (openParCount === closedParCount)  ){
    return true;
  }
  return false;

};

balancedParens( '('    );  // false
balancedParens( '()'   ); // true
balancedParens( ')('   );  // false
balancedParens( '(()) ');  // true
balancedParens( '(())()  (())');
balancedParens('[(]{)}'); // false


