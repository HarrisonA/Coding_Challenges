/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!
  // write or download a jquery html table sorting function

  // on click of any table header
	$( "th" ).click(function(elmement) {
		// grab text from the th element
		var sortByText = element.text();
		//or
		var sortByText = element.value
		// pass that text into the the table sorting function 	
		// sort and re-render the table
	});


});

