// Select color input
// Select size input 
const canvas = $('#pixelCanvas'); 
let submit = $('#submit');
let color = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
submit.on('click', function(e){
    e.preventDefault();
    makeGrid();
   });

function makeGrid() {
   canvas.children().remove();
    var height = document.getElementById("inputHeight").value;
    var width  = document.getElementById("inputWeight").value;

   for(var i = 0; i < height; i++){
     canvas.append('<tr></tr>'); 
 }
    var j = 0;
  while(j < width){
      $('tr').append('<td> </td>'); 
      j++;
    }
 var cell = $('td');
 cell.on('click',function(){
    this.style.backgroundColor = color.val();
 }) 

}


   