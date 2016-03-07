/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  // TODO: Your code here

  // obj needs to be returned with functions
  // obj.testFunction = function(input){
  //   return input
  // }

  obj.events = {};

  obj.on = function(eventName, callback){
    // obj.prototype[]
    if(this.events[eventName]){ 
      //console.log("a second event was added")
      this.events[eventName].push(callback);  //works
    } else {
      this.events[eventName] =[];
      this.events[eventName].push(callback);
    }

    //console.log("lkdljd;a", this[eventName]);

  }

  obj.trigger = function(eventName){

    //this[eventName]();  // works
    for (var i=0; i<this.events[eventName].length; i++){
      this.events[eventName][i]();
    }
    // console.log("this is: ", this);
    // console.log("\n\nobj is: ", obj)
  }

  return obj;
};


var testObj = mixEvents({ name: 'Alice', age: 30 });
//console.log(testObj.testFunction("it works"));


testObj.on('ageChange', function(){
  console.log("Event triggered: age changed!!!");
});

testObj.on('ageChange2', function(){
  console.log("ANOTHER Event triggered!!!");
});

testObj.on('ageChange', function(){
  console.log("SECOND Event triggered: age changed!!!");
});

testObj.trigger('ageChange');


testObj.trigger('ageChange2');

