var colorPicker, pixelCanvas, row, column, table;

var pixelCanvas = $("#pixelCanvas");
var colorPalette = $("#colorPalette");

//pick a color
$(pixelCanvas).on("click",function(a){
    colorPicker = $("#colorPicker").val();
    $(a.target).css("background-color",colorPicker);
});

//change size
$("#sizePicker").on("submit",function(a){
    a.preventDefault();
    row = $("#inputHeight").val();
    column = $("#inputWeight").val();

// When size is submitted by the user, call makeGrid()
    makeGrid(row,column);
});
//build Grid
function makeGrid() {
    table = "<table class='table'>";
    table+= "<tr></tr>";
    for (var i=0; i<row; i++){
        table+="<tr>";
        for (var y=0; y<column; y++){
            table+="<td class='cell'></td>";
        }
        table+= "</tr>";
    }
    table+= "</table>";
    $(pixelCanvas).html(table);
    palette()
}




colorPalette.on("change", ".paletteFilled", function() {
    colorPicker = $(this).css("background-color");
});
