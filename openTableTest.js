// name = "bob";
// function sayHi() { return this.name }

// console.log(sayHi());


// var bullshit = {
//   name: "bob",
//   sayHi: function (){
//     return this.name;
//   }


// }

// console.log(bullshit.sayHi())


var obj = { name: 'Johnny'};

obj.sayHi = function (){
  console.log(this.name);
}

obj.sayHi();



var a = [-10, -8, -5, 1, 2, 4, 5, 6];
// sort a

console.log(a);
var length = a.length;
var negArr = [];

a.forEach(function(elem){
   // negArr =  [];
  if (elem<0){
    negArr.push(elem);
    console.log(elem);
  }
});

var product = a[length-1] * a[length-2] * a[length-3];

if (negArr.length >1){
  // sort the negative array
  if ((negArr[0] * negArr[1] * a[length-1]) > product){

    console.log("negatives", negArr[0] * negArr[1] * a[length-1]);
  } else {
    console.log(product);
  }

} else {
  console.log(product);
}
