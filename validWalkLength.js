// from codewars.com
// input: array of directions where each element indicates walking 1 block 
// in that direction

// Walking a total of exactly 10, write a function that will
// determine if the input will bring you back to the point
// you started on

function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length !== 10) return false;

  var startpoint = [0,0];
  for (var i=0; i<walk.length; i++){
    if (walk[i] === 'n') startpoint[0]--;
    if (walk[i] === 's') startpoint[0]++;
    if (walk[i] === 'w') startpoint[1]--;
    if (walk[i] === 'e') startpoint[1]++;
    console.log(startpoint);
  }

  if ((startpoint[0] === 0) && (startpoint[1] === 0) ) return true;
  return false;
}

var path = ['n',' s', 'w', 'e', 'n', 's', 'w', 'e' , 'n', 's'];
console.log(isValidWalk(path));
