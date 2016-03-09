
/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
// create our return array
var resultArray =[];
var str = string;
// Create an empty object
var obj = {};
// Loop thru the string input
	//see if each char is already a key in our object
		// if so, then increment the value by 1
		// if not, then create the key and give the value 1
for (var i = 0; i < str.length; i++) {
 	if (obj[str[i]] === undefined) { 
		obj[str[i]] = 1;
	} else {
		obj[str[i]]++
	} 
 }

// Loop thru each key of the object
	// and place the key value pair into an array and push that into the return array
var tuple = [];
for (var key in obj){
	tuple.push(key);
	tuple.push(obj[key]);
	resultArray.push(tuple);
	tuple = [];
}


// Loop through the return array and sort it accoring to highest value of each key/value array

//function to use to control the native .sort method that exists on all arrays
	// if the second value is less than the first, then return a negative number
var someFunction = function (a,b){
	//return (a[1]-b[1]);  // if this is negative then b is greater than a, so keep them in place
						 // because we want them from lowest to highest
						 // Example  2-5 === -3  

	return (b[1]-a[1]);  // if this is negative then a is greater than b, so switch them because
						 // ins this case we want it to go from highest to losest   
					     // Example b(5) and a(8)  5-8 = -3 so put 8 in front  
}
resultArray.sort(someFunction);   // use the sort function to determine the sort condition
								  // if some funnction returns a negtive number, then sw

var someFunction2 = function(a,b){
	//console.log(a, b	);
	if (a[1]===b[1]){  // check for same value
		console.log("\n\nsame value", a[0], b[0]);
		if (b[0]<a[0]) { 
			return 1;    	// if key b < a, then return 1, meaning b needs to be place in front of a  
		} else {
			return -1;     		// else return -1 which means a needs to be place in front of b
		} 
	} else {
		console.log("values are not the same")
		return 0;
		} 

}

resultArray.sort(someFunction2);

console.log("\nresultArray after key sort", resultArray)





// Loop through the return array and look for values that are the same
	// if one key is less than the other, then swap, and keep going back to the first key
	
// return the return array
  //console.log(obj);
  //console.log(resultArray);
  return resultArray;
};

characterFrequency("zzooaarrrrr");