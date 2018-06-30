// Select color input
$("#pixelCanvas").on("click", "td", function(evt) {
   	$(this).css("background-color", $("#colorPicker").val());
	//Colors the td that the user clicks
});

// When size is submitted by the user, call makeGrid()
$("#inputSubmit").click(function(e){
	e.preventDefault();
	makeGrid();
});

function makeGrid() {
	
	// Select size input
	var height = $("#inputHeight").val();
	var width = $("#inputWeight").val();

    $("#pixelCanvas").empty(); //Empty the grid and start over

    //Loop -> Create rows
    for (x = 0; x < height; x++) {
    	$("#pixelCanvas").append("<tr>"); //Start Row
      	//Loop -> Create columns for each row
      		for (y = 0; y < width; y++) {
        		$("tr:eq(" + x + ")").append("<td></td>");
        		//i got the :eq selector idea from a previous project on Github
      		}
     	$("#pixelCanvas").append("</tr>"); //End Row
    }

};
