/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */
/*
1  2  3  4              13 9  5 1
5  6  7  8              14 10 6 2
9  10 11 12             15 11 7 3
13 14 15 16             16 12 8 4 */

var rotateMatrix = function(matrix, dir) {
  // Your code here.
  // assuming an n x n size matrix
  // the first row (0,j) will ALWAYS be the n-1 element of each final array
  // 0,0 --> (0, n-1)
  // 0,1 --> (1, n-1)
  // 0,2 --> (2, n-1)
  // 0,3 --> (3, n-1)

  // the (n-1,j row (aka last row) will ALWAYS be the 0 element of each row
  // 3,0 --> (0,0)
  // 3,1 --> (1,0)
  // 3,2 --> (2,0)
  // 3,3 --> (3,0)

  if (dir===1 || dir===undefined){
    // rotate 90
  } else if (dir=== -1){
    // rotate -90
  } else {
    console.log("illegal rotation parameter");
    return
  }


  // var for result array
  var rotMatrix = [];

  //length of one side
  var jlength = matrix[0].length;
  var ilength = matrix.length;
   // console.log(ilength);
   // console.log(jlength);
  // return

  if(dir===1 || dir===undefined){
      // Loop through each column
      for (var  j= 0; j <jlength; j++) {

        // var to hold the new row for the result matrix
        var tempArr = [];

        // loop through each row, starting from the last one
        for (var i = ilength-1; i >= 0; i--) {

          // push each element into a temp array
          tempArr.push(matrix[i][j]);

        }
        // push the temp array into the result matrix
        rotMatrix.push(tempArr);
      }
  }

    if(dir === -1){
      // Loop through each column, starting form the last one
      for (var  j= jlength-1; j>=0; j--) {

        // var to hold the new row for the result matrix
        var tempArr = [];

        // loop through each row, starting from the first one
        for (var i = 0; i< ilength; i++) {

          // push each element into a temp array
          tempArr.push(matrix[i][j]);
        }

        // push the temp array into the result matrix
        rotMatrix.push(tempArr);
      }
  }



  // return the result matrix
  return(rotMatrix);
};


var matrixTest = [
  [1,2,3,4,55],
  [5,6,7,8,66],
  [9,10,11,12,77],
  [13,14,15,16,88],
  ['top', 'mid1', 'mid2', 'mid3', 'bot']
 ];

//rotateMatrix(matrixTest);

 var twoXtwo = [ [1,2],[3,4] ];
 //rotateMatrix(twoXtwo);

 var matrix4x4 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
 ];

var  matrix3x3 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
 ];

console.log(rotateMatrix(matrix3x3, 1));
var matrix4x3=[
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
 ];

console.log('\n\n',rotateMatrix(matrix4x3, -1));