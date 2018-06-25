// Select color input
// Select size input 
const pixelcanvas = $('#pixelCanvas'); 
let submitbutton = $('#submit');
let color = $('#colorPicker'); 

// When size is submitted by the user, call makeGrid()
submitbutton.on('click', function(e){
    e.preventDefault();
    makeGrid();
   });

function makeGrid() {
   pixelcanvas.children().remove();
    var height = document.getElementById("inputHeight").value;
    var width  = document.getElementById("inputWeight").value;

   for(var i = 0; i < height; i++){
     pixelcanvas.append('<tr></tr>'); 
 }
    var j = 0;
  while(j < width){
      $('tr').append('<td> </td>'); 
      j++;
    }
 var gridbox = pixelcanvas.children().find('td');
 gridbox.on('click',function(){
    this.style.backgroundColor = color.val();
 }) 

}
