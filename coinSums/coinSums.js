/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
100p    --> £1 (100p)
200p    --> £2 (200p)


// create an object for each piece up to 
*/



// Use recursion




/*
It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

/* combos examples:
5 
2 2 1
2 1 1 1
1 1 1 1 1

2
1 1

20
10 10
10 5 5
10 5 2 2 1
10 5 2 1 1 1
and so on
*/ 


// TGA SOLUTION:

// NOTE: Just find the number possible combinations, but YOU 
// DON'T HAVE TO PRINT OUT THE COMBOS.  THIS SOLUTION DOESN'T
// GIVE YOU ALL THE COMBINATIONS


//coins = [200, 100, 50, 20, 10, 5 ,2 ,1];
var coinsss = [1, 2, 5, 10, 20, 50, 100, 200];

var TGAmakeChange = function (total, coins){
  console.log(coins.length);
  var counter = 0;

  var recurse = function (index, remainder){
    var coin = coins[index];
    if (index===0){
      remainder % coin === 0 && counter++;
      return;
    }
    while (remainder >=0){
      recurse(index-1, remainder);
      remainder -= coin;
    }

  }
  // console.log(coins);
  recurse(coins.length-1, total);
};


TGAmakeChange(2, [1,2,3]);



 //My solution 
 var currency = {
  "1": 1,
  "2": 2,
  "5": 5, 
  "10": 10,
  "20": 20,
  "50": 50,
  "100": 100,
  "200": 200,
 }

 cArray = [200, 100, 50, 20, 10, 5 ,2 ,1];


 var makeChange = function(total){
  var resultArr =[];
  var comboArr = [];
  var danger = 0;



  var changeMaker = function (input, largestNum, totalSoFar){
    danger++;
    if (danger>200){ 
      console.log("stackOVERFLOW!!\n\n");
      return
    }  // stack overflow protection
    
    if (input === undefined){return}

    // base case, no more combos left
    if (currency[numStr]){  // COME BACK!!!!
      //return
    }
    console.log(input);
    // first push in the highest possible value into the combo array
    var numStr = input.toString();
    var index = cArray.indexOf(input);
    var lastIndex =  cArray.indexOf(1);
    if (currency[numStr] /* && largestNum===true*/ ){
      if (input === totalSoFar){
        comboArr.push(input);
        resultArr.push(input);  // one result found
        //largestNum = false;
        comboArr = [];   // empty the combo array
        index++;
        var newInput = cArray[index];
        changeMaker(newInput, true, 0);
      } else {
        // loop thru all the remaining possiblities
        comboArr.push(cArray[index]); 
        totalSoFar =+ cArray[index];

        console.log("totalSoFar: ", totalSoFar);
        if (totalSoFar===total){
          resultArr.push(comboArr);
          console.log ("solution found: ", comboArr, "\n");
          return
        }
        for (var i=index; i<=lastIndex; i++ ){
          console.log("inside for loop \n");
          changeMaker(input, largestNum  , totalSoFar);
          largestNum = false;
          var newIndex = index;
          input = cArray[newIndex++];
        }

        // totalSoFar+=input;


        // case where the totalsoFar is less than input

      }
      // now call change maker with the next largest number

    } 

  }

  //changeMaker(total, true, total);
  // console.log("the results array: ", resultArr);
};

TGAmakeChange(2);

