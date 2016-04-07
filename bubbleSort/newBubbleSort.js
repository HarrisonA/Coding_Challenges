

var helper = function (array){
  var temp;
  for (var i = 0; i < array.length; i++) {
    if(array[i]>array[i+1]){
      temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
    }
  }
  return array;
}


var bubbleSort = function(arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]>arr[i+1]){
      helper(arr);
      i = -1;
    }
  }
}


var testArr = [9,7,10,5];
bubbleSort(testArr);
console.log (testArr);