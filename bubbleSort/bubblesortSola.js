var counter = 0;

var helperSort = function (somearray) {
  for (var i = 0; i < somearray.length; i++) {
    if (somearray[i] > somearray[i + 1]) {
      temp = somearray[i];
      somearray[i] = somearray[i + 1];
      somearray[i + 1] = temp;
    }
  }

  return somearray;
};

var bubbleSort = function (array) {
  // Your code here.
  var temp;
  for (var j = array.length - 1; j >= 0; j--) {
    if (array[j] < array[j - 1]) {
      counter++;
      array = helperSort(array);
    }
  }

  console.log(array);
  return array;
};

bubbleSort([2, 1, 3, 11, 4, 56, 1, 3, 1, 32, 0]);
console.log("Number of sorts: ", counter);
