/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};



/* My solution    ** Nick solution is below **

Tree.prototype.BFSelect = function(filter) {
  var resultsArr = []
  // loop through the children, then recursively loop through their children

  var breadthRecurse = function(childrenArr, depth){
    if (childrenArr.length === 0) return

    for (var i=0; i<childrenArr.length; i++){
      console.log (depth);
      if (filter(childrenArr[i].value)){
        resultsArr.push(childrenArr[i].value);
      }
    };

    for (var i=0; i<childrenArr.length; i++){
      breadthRecurse(childrenArr[i].children, ++depth);
    }
  }
  
  var depth = 0;
  if (filter(this.value)){
    resultsArr.push(this.value);
  }
  depth++;

  breadthRecurse(this.children, depth);


  // return an array of values for which the function filter(value, depth) returns true
  console.log(resultsArr);
  return resultsArr;
};

*/





/**
 * You shouldn't need to change anything below here, but feel free to look.
  */


/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};


var greatThanZero = function(input, depth){
  return input > 0;
}



//
// Nick's solution
//

Tree.prototype.BFSelect = function(filter) {
 // return an array of values for which the function filter(value, depth) returns true
 var results = [];

 //subroutine for recursion
 var recursion = function(nodesOnALevel, depth){
   //nodesOnALevel = [] of nodes
   var whiteVan = [];

   //iterate across nodes on this level
   for (var i = 0; i < nodesOnALevel.length; i++) {
     //check the filter condition on this nodes
     if(filter(nodesOnALevel[i].value, depth)){
       results.push(nodesOnALevel[i].value);
     }

     //grab the children
     for (var j = 0; j < nodesOnALevel[i].children.length; j++) {
       whiteVan.push(nodesOnALevel[i].children[j]);
     }
   }
   
   //move down a level
   if(whiteVan.length){
     recursion(whiteVan, depth+1);
   }
 };

 //start the recursion
 recursion([this], 0);

 //return array of results
 console.log(results);
 return results;
};


// Test
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var leaf8 = leaf4.addChild(8);
var leaf9 = leaf4.addChild(9);


root1.BFSelect(greatThanZero);
