/* assumming a perfectly grided city, find the shortest distance between
two locations.  Assuming that the distance is only traveled along the street.
Like a car would.

Example:  Start pt (0.4, 1).  End pt (0.9, 3).

Total distance travel is 2.7

Input is given in the form of an start point tuple, and end pt tuple
like in the example above.  Destiniation is given in the same was as the
origin.

*/
var shortestDecimalDistance = function (start, end) {
  var totalDistance;

  // check if start and end are in the same column
  if (Math.abs(start - end) < 1) {

    // check to see which path is longer
    if ( Math.abs(start + end) >= ((1 - Math.abs(start)) + (1 - Math.abs(end))) ) {
      totalDistance = (1 - Math.abs(start)) + (1 - Math.abs(end));
    } else {
      totalDistance = Math.abs(start + end);
    }

  } else { // not in the same column
    totalDistance = Math.abs(start - end);
  }

  return totalDistance;
};

var shortestTotalDistance = function (startTuple, endTuple) {
  var sx = startTuple[0];
  var sy = startTuple[1];
  var ex = endTuple[0];
  var ey = endTuple[1];
  var xdist;
  var ydist;

  // Both integers
  if (Number.isInteger(sx) && Number.isInteger(sy)) {
    return Math.abs(sx - ex) + Math.abs(sy - ey);
  }

  // check if x is the integer, y is decimal
  if (Number.isInteger(sx)) {
    xdist = Math.abs(sx - ex);
    return xdist + shortestDecimalDistance(sy, ey);

  } else {
    ydist = Math.abs(sy - ey);
    return ydist + shortestDecimalDistance(sx, ex);
  }

};


// Test for the example input
// console.log(shortestTotalDistance([0.4,1], [0.9,3]));
