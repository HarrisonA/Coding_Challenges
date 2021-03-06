var image = [
  [0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
];

// Find the number of zero images
// A zero image is the collection of zeros that are completed surround by 1s.
// For each zero image, report its top/left and bottom/right index


// create a duplicate array of images, but mark all values false;
var createDupArrary = function (array){
  var copyArr = [];
  for (i=0; i<array.length; i++){
    copyArr.push([]);
    for (j=0; j<array[0].length; j++){
      copyArr[i].push(false);
    }
  }

  return copyArr;
};

var getImages = function (image){

  var visitedArr = createDupArrary(image);

  var imagesFound = {
    count: 0,
    cornersList: [],
  };

  var lowestX;
  var lowestY;
  var highestX;
  var highestY;


  // update image corners through closure
  var updateImageCorners = function (x,y){
    if(x<=lowestX && y<=lowestY) {
      lowestX = x;
      lowestY = y;
    }

    if(x>=highestX && y>=highestY) {
      highestX = x;
      highestY = y;

    }
  };

  //Add later (modularity)
  var getChildren = function (xCoord, yCoord){
    var arrOfKids = [];

    //top child
    if((image[xCoord-1] !== undefined) && (visitedArr[xCoord-1][yCoord]===false)){
      visitedArr[xCoord-1][yCoord] = true;
      if(image[xCoord-1][yCoord] === 0){
        arrOfKids.push([xCoord-1,yCoord]);
      }
    }

    //bottom child
    if((image[xCoord+1] !== undefined) && (visitedArr[xCoord+1][yCoord] === false)) {
      visitedArr[xCoord+1][yCoord] = true;
      if(image[xCoord+1][yCoord] === 0){
        arrOfKids.push([xCoord+1,yCoord]);
      }
    }

    //left child
    if((image[xCoord][yCoord-1] !== undefined) && (visitedArr[xCoord][yCoord-1] === false)){
      visitedArr[xCoord][yCoord-1] = true;
      if(image[xCoord][yCoord-1] === 0){
        arrOfKids.push([xCoord,yCoord-1]);
      }
    }

    //right child
    if((image[xCoord][yCoord+1] !== undefined) && (visitedArr[xCoord][yCoord+1] === false)){
      visitedArr[xCoord][yCoord+1] = true;
      if(image[xCoord][yCoord+1] === 0){
        arrOfKids.push([xCoord,yCoord+1]);
      }
    }

    return arrOfKids;
  };


  var recurseChildren = function(arrayOfCoords){  // array of [x,y] coords
    var allChildren = [];
    var childrenOfASingleNode = [];

    // loop through the array of coordinates and get children
    for(var i=0; i<arrayOfCoords.length; i++){

      var x = arrayOfCoords[i][0];
      var y = arrayOfCoords[i][1];

      // mark visited
      visitedArr[x][y] = true;

      // check if this coord is the lowest [x,y] or highest [x,y]
      // to find the top/left corner and bottom/right
      updateImageCorners(x, y);

      // get children of the current element
      childrenOfASingleNode = getChildren(x, y);

      // add each child of the current element into the allChildren array
      childrenOfASingleNode.forEach(function(child){
        allChildren.push(child);
      });

    }

    // recurse on the array of children, if they exist
    if (allChildren.length){
      recurseChildren(allChildren);
    }
  };


  //loop through the image array
  for (var i=0; i<image.length; i++){
    for (var j=0; j<image[0].length; j++){

      //check if node has been visited and see if has a 0

      if((visitedArr[i][j]===false) && (image[i][j]=== 0)){
        imagesFound.count++;

        lowestX = i;
        lowestY = j;
        highestX = i;
        highestY = j;

        // check children
        recurseChildren([[i,j]]);
        imagesFound.cornersList.push([lowestX, lowestY, highestX, highestY]);
      }


    }
  }

return imagesFound;

};

console.log(getImages(image));

