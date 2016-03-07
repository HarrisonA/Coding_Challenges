/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){
  // check that all top level keys and values exist in both objects
  var result = true;
  var danger = 0;
  var recursionNow = function(obj1, obj2){
      danger++;
      if (danger > 300) {return}

      console.log("your two objs: ", obj1, obj2);

      for (var key in obj1){
        if (obj2[key] === undefined) {
          console.log("key doesn't exist in both")
          result = false;  // key doesn't exist in both
        } else {

          if((typeof(obj1[key]) === "object") && (typeof(obj2[key]) === "object")){
            console.log("object found");
            //recursion is needed 
            // console.log(apple[key], orange[key]);
            recursionNow(obj1[key], obj2[key]); 
            // result=true;

          } else if (obj1[key] !== obj2[key]) {
            console.log("key exist but value is different in both: ", obj1[key], obj2[key] );
            result = false;  //key exist but value is different in both
          }
        }  //end of else
      } // end of for loop
  }

  recursionNow(apple, orange);
  return result
  // not done but this will work for objects that don't have nested objects
};

console.log(deepEquals({a:1, b: {c:{d:4}}}, {a:1, b: {c:{d:4}}} ))
