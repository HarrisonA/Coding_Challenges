// console.log("fb");

/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'

 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *


 * example 2:  // not sure about this example YET!!!!
 *
 * var func = function(a, b){ return a + b };

 * var boundFunc = bind(func, null, 'foo');
 // bind arguments are FXN, context, inputArgs
 // returns the function its context and the input args

 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */



//  first argument is a function/method
//  second argument the context for this

// bind returns a function

var bind = function(func, context) {
	var returnFunc;
	var extraArgs = [];  // array to hold extra arguments passed into this function

	/* 3 ways to copy the arguments object into an array */

	// 1.
  extraArgs = Array.prototype.slice.call(arguments);
	// 2.  extraArgs = [].slice.call(arguments);
	// 3. for (var key in arguments){
	//			extraArgs.push(arguments[key]);
	// 		}

	extraArgs.splice(0, 2);  // remove the first two elements of an array
														// extraArgs.shift();   <-- ROOKIE WAY TO DO IT
														// extraArgs.shift();

	anonFunction = function(){     // anonymous function (that will be returned by bind)    
		for (var key in arguments){  // loop thru any arguments if given to the anon function
			extraArgs.push(arguments[key]); //add these arguments to the extraArgs array
		}
		return func.apply(context, extraArgs);  // anon func will return an invoked func that has
																						// an extra args form bind AND the args to the anon func

	}  //end of anon function
  return anonFunction  // return the 
};



// TEST OUT bind
var func = function(a, b){
	return a + b
};

var boundFunc = bind(func, null, 'foo');
// bind arguments are FXN, context, inputArgs
// returns the function its context and the input args

var result = boundFunc('bar');
console.log(result);

// Another Test of bind
var alice = {
	name: 'alice',
	shout: function(){
		console.log(this.name);
	}
}

var boundShout = bind(alice.shout, alice);
boundShout();


/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

 Function.prototype.bind = function(
 	) {
  // TODO: Your code here
};
