/*## HTML/jQuery
The included index.html contains two paragraph tags, each containing a block of lorem ipsum text. Using the file `main.js`:
* [ ] Write a function that wraps every word in its own `<span>` tag.
* [ ] Make each word change color once per second to a random color.
*/


$(document).ready(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!

  // grab all the text in each p element and split it into an array
  var words = $("p").text().split(" ");

  // remove all of the text in each p element
  $("p").empty();

  // loop through each element of the array
  $.each(words, function(index, value, collection) {

    // query all p elements and append a span element with 
    // the text of each element in the array
    var rand = Math.floor(Math.random()*255);
    $("p").append($("<span>").text(value).css('color','rgb('+ rand +',' + rand + ',' + rand +')'));
  });


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!


  // TGA solution

  // $('p').each(function(index, element){
  //   var $el = $(element);  // turning element in to a jquery object and giving it a shorter name $el

  //   var words - $el.text().split('');
  //   $el.html('');

  //   for (var i=0; i<words.length; i++){
  //     var newSpan = $('<span>').text(words[i] + ' ');
  //   }


  // })

  // Change color every second



  setInterval(function(){
    $.each($('span'), function(){
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);

      $(this).css('color', 'rgb(' + red + ',' + green +',' + blue +')');
    })

  }, 1000)

});


