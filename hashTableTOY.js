/**
 * TASK: Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 
 * TASK: Be sure to handle hashing collisions correctly.

 * TASK: Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.

 * TASK: Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  // create the array that will hold the buckets
  var bucketArray = [];

  //put the buckets (aka empty arrays) in the bucketArray
  for (var i=0; i<storageLimit; i++){
    bucketArray[i] = [];
  }


  result.insert = function(k,v){
    // TODO: implement `insert`
    // get the index of the bucket for the key argument
    var index = getIndexBelowMaxForKey(k, storageLimit);

    var keyAlreadyExist = false;  // need to keep track of existing keys    
    // create the tuple array
    var tupleArray = [];
    // push the key value pair into that tuple
    tupleArray.push(k);
    tupleArray.push(v);

    // before adding it check and see if the key already exists in
    // bucketArray[index]
    for(var j=0; j<bucketArray[index].length; j++){
      // see if the key exists in any of the tuples for that bucket
      if(bucketArray[index][j][0]===k){
        // if key exists, then just update the value
        bucketArray[index][j][1]= v;
        keyAlreadyExist = true;
        break;  // exit the loop
      }
    }

    if (keyAlreadyExist === false){ // the key and value needs to be added to the tuple
      bucketArray[index].push(tupleArray);
    }

    // NOT DONE!!!!



  };

  result.retrieve = function(k ){
    // TODO: implement `retrieve`
  };

  result.remove = function(k ){
    // TODO: implement `remove`
  };

  //}

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};