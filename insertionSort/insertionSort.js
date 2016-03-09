/*jshint expr:true*/
console.log("insertion Sort");

//swap function to all arrays
Array.prototype.swap = function (index1, index2){
	var temp;
	temp=this[index1];
	this[index1] = this[index2];
	this[index2] = temp;
} 


/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 */

 //input to the sort is an array of objects in this format:
 	// [{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]
 	// Every object will have a value key and an order key
 	//

 // Solution: Loop through the each array element
 	// check each element to see if its less than the current element
 	// this will require a second loop
 		// if current element is less than the element thats being checked
 		//  then insert the current element at the index of the element being checked
 		// and check that one versus the previous one


 		// ELSE 
 			// if the current element equals the element being checked
 				// check if the current order is less than the order of the eleemnt being checked
 					// if so then insert ththe current element at the index of the element being checked


 	// return the sorted array (or at least console.log the sorted array)

 var insertionSort = function (inputArr){
 var length = inputArr.length;
 var inputArrayCopy = [];

 // make a copy of the input array
 for (var i=0; i<inputArr.length; i++){
 	 inputArrayCopy[i] = inputArr[i];
 }

 //var sortedArr = [];  // might need this

 //sortedArr[0] = inputArrayCopy[0];  //initailly the sorted array will always have first element of the input array
 

// check each element to see if its less than the current element
 	// this will require a second loop
 		// if current element is less than the element thats being checked
 		//  then insert the current element at the index of the element being checked
 		// and check if the element that was swapped is less than the element before that


 for (var i=1; i<length; i++){  //i loop is for the the sorted array
   for (var j=i; j>=0; j--){ //j loop is for the comparison 
  	 if (inputArrayCopy[j-1]===undefined){break;}

  	 if (inputArrayCopy[j].value<inputArrayCopy[j-1].value){
  	 	 inputArrayCopy.swap(j,j-1);
  		
  	 } else if ( (inputArrayCopy[j].value === inputArrayCopy[j-1].value) ){
  		 if(inputArrayCopy[j].order<inputArrayCopy[j-1].order){
  		   inputArrayCopy.swap(j,j-1);
  		  break;
  		 }
  	}
  }
 }

};//end of insertionSort


insertionSort([{value: 10}, {value: 5, order: 2}, {value: 5, order: 1}]);
 /*
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];
  
  for (var i = 0; i < array.length; i++)
    transform.push({value: array[i], i: i});

  return transform;
};

var insertionSort = function(array
) {
  // Your code goes here. Feel free to add helper functions if needed.
  return array;
};
