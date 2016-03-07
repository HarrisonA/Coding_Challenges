/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/



Array.prototype.isSubsetOf = function(array){
  // Your code here
  // THIS will refer to the array that we want to see is in
  // our INPUT array parameter


  
 	var tempThisArray = [];  //array used to hold copies of this array
 	for (var i=0; i<this.length; i++){
 		for (var j=0; j<this.length; j++){
 			if(this[i]===this[j+1]){
 			break;	
 			} 
 		tempThisArray[i]=this[i];  // no duplicates found so we want to put
 		}						   // this in our temp array (that well use for)
 	}								// susbet check
 	tempThisArray.push(this[this.length-1]);  //the last element never gets checked
 											  // so make sure it makes it into temp	

 	

  	var matchesToMake = tempThisArray.length;
  	var matchesFound = 0;
  	var oneMatchFound = false;
  	var result = false;

  	for (var i=0; i<tempThisArray.length; i++){
  		//console.log("MatchesFound: ", matchesFound);

  		for (var j=0; j<array.length; j++){
  			if(tempThisArray[i]===array[j]){
  				matchesFound++;
  				oneMatchFound = true;
  				if (matchesToMake===matchesFound){
  					result = true;
  					console.log("MatchFound");
  					return result;

  				}
  				break;
  			}

  		}
  		if (oneMatchFound=== false) {
  			return false;
		} else {oneMatchFound=false;}
  	} 
  
  	

};


//var a = ['commit','push'];
 //var test = a.isSubsetOf(['commit','rebase','push','blame']) // true

//var b = ['merge','reset','reset']
//b.isSubsetOf(['reset','merge','add','commit']) // true 

