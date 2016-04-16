/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*/

var Stack = function (capacity){
  this.capacity = capacity;
  this.size = 0;
  this.storage = {};
  this.minStack = [];
}

Stack.prototype.push = function(input) {
  if (this.size === this.capacity) {
    //console.log("Stack is full");
    return "Stack is full";
  };

  this.storage[this.size] = input;
  this.size++;

  var minStack = this.minStack;

  if (minStack.length === 0) {
    minStack.push(input);
  } else if (input < minStack[minStack.length-1] ){
    minStack.push(input);
  }
};

Stack.prototype.count = function (){
  return this.size;
}

Stack.prototype.pop = function() {
  if (this.size === 0) {return null};

  this.size--;
  var popped  = this.storage[this.size];
  if (popped === this.minStack[this.minStack.length-1]){
    this.minStack.pop();
  };
  delete this.storage[this.size];
  return popped;
};

Stack.prototype.peek = function (){
  // console.log("peek: ", peekVal)
  return this.storage[this.size-1]
}

Stack.prototype.contains = function (val){
  for (var key in this.storage){
    if(this.storage[key] === val){
      return true;
    }
  }
  return false;
}

Stack.prototype.until = function (val){
 if (this.size === 0) {return null};

  var pops = 0;
  var size = this.size;

  for (var i = size-1; i>=0; i--){
    pops++;
    if(this.storage[i]===val){
      return pops;
    }
  }
  return null;
}

Stack.prototype.min = function (){
  return this.minStack[this.minStack.length-1];
}

Stack.prototype.sortAscending = function (){
  var size = this.size;
  var storage = this.storage;

  // bubble sort
  for (var i=size-1; i>=0; i--){
    for(j=size-1; j>=0; j--){

      if(storage[j]<storage[j-1]){
        var temp = storage[j-1];
        storage[j-1] = storage[j];
        storage[j] = temp;
      }

    }
  }
};

var stack = new Stack(10);
stack.push(2);
stack.push(9);
stack.push(62);
stack.push(0);
stack.push(3);
stack.push(11);
stack.push(-1);

stack.sortAscending();
console.log(stack.storage);

// bubble sort from Optimize Prime:
function bubbleSort(array) {
  function swap(i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (var i = array.length - 1; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
      if(array[j]  > array[j+1]) {
        swap(j, j+1);
      }
    }
    console.log(array);
  }
}

// bubbleSort([1,2,0,4,5,-5]);


// Testing

var expect = require('chai').expect;

describe('Stack Tests', function(){
  it('Count returns number of items in stack', function(){
    var stack = new Stack(10);
    stack.push(5);
    stack.push(6);
    expect(stack.count()).to.equal(2);
  });

  it('Returns error when push is attempted on a full stack', function(){
    var stack = new Stack(2);
    stack.push(5);
    stack.push(6);
    expect(stack.push(99)).to.equal('Stack is full');
  });

  it('Does not return error when push is attempted on stack thats not full', function(){
    var stack = new Stack(2);
    stack.push(5);
    expect(stack.push(99)).to.equal(undefined);
  });

  it('Pop returns the top element of the stack', function (){
    var stack = new Stack(2);
    stack.push(5);
    stack.push(6);
    expect(stack.pop()).to.equal(6);
    expect(stack.pop()).to.equal(5);

  });

  it('Push correctly adds the item to the stack', function(){
    var stack = new Stack(4);
    stack.push(5);
    expect(stack.storage[0]).to.equal(5);
    stack.push(6);
    expect(stack.storage[1]).to.equal(6);
  });

  it('Peek returns undefined on empty stack', function(){
    var stack = new Stack(4);
    expect(stack.peek()).to.equal(undefined);
  });

  it('Peek returns the top item in the stack', function(){
    var stack = new Stack(4);
    stack.push(3);
    stack.push("hello");
    expect(stack.peek()).to.equal("hello");
  });

  it('Contains finds item that is in the stack', function(){
    var stack = new Stack(4);
    stack.push(3);
    expect(stack.contains(3)).to.equal(true);
    expect(stack.contains(10)).to.equal(false);
  });

  it('Until returns the correct number of pops to find an element', function(){
    var stack = new Stack(7);
    stack.push(3);
    stack.push(9);
    stack.push(11);
    stack.push(23);
    stack.push(40);
    expect(stack.until(3)).to.equal(5);
    expect(stack.until(40)).to.equal(1);
    expect(stack.until(99)).to.equal(null);
  });

  it('Min returns the minimum stack value', function (){
    var stack = new Stack(19);
    stack.push(12);
    stack.push(0);
    stack.push(1);
    stack.push(-90);
    expect(stack.min()).to.equal(-90);
    stack.pop();
    stack.pop();
    expect(stack.min()).to.equal(0);
  });

  it('Sorts the stack into ascending order', function(){
    var stack = new Stack(10);
    stack.push(2);
    stack.push(9);
    stack.push(62);
    stack.push(0);
    stack.push(3);
    stack.push(11);
    stack.push(-1);

    stack.sortAscending();
    expect(stack.storage).to.deep.equal({ '0': -1, '1': 0, '2': 2, '3': 3, '4': 9, '5': 11, '6': 62 });

  });

});

/*
*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

// function Stack(capacity) {
//   // implement me...
// }

// Stack.prototype.push = function(value) {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.pop = function() {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.peek = function() {
//   // implement me...
// };
// // Time complexity:

// Stack.prototype.count = function() {
//   // implement me...
// };
// // Time complexity:


/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
