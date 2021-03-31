var draw
var unit=20;
// When the window is loaded, call (use) the init function. 

window.onload= init; 

// comment (Command + / or Ctrl + /)
// - Block within code that the computer skips over.
// - Meant to be seen by humans

// Function
// - Group of code that is packaged under a function name that can be used mulitple times.
// - init() function is the first function that is used when the webpage 
// is loaded.
function init() {
    // Variable
    // - Storing a value given a name
    // Connecting the element in HTML file with the id of "myCanvas"
    var canvas = document.getElementById("myCanvas");
    draw = canvas.getContext("2d");    // When drawing inside the canvas, make it 2 dimensions. 
    draw.canvas.width=1000;
    draw.canvas.height=700; 

}

function startDrawing() {
draw.fillRect(2*unit,100,100,500);
draw.fillRect (200,100,500,100)
}

function drawDiamond() {
    draw.fillRect(500,50,50,50)
}



function clear() {
    draw.clearRect(0,0,draw.canvas.width, draw.canvas.height);
}

function drawName(){
    
}
function drawCursor(){
    draw.fillRect(0,0,unit,17*unit);
    draw.fillRect(unit,unit,unit,unit)
    draw.fillRect(2*unit,2*unit,1*unit,1*unit)
    draw.fillRect(3*unit,3*unit,1*unit,1*unit)
    draw.fillRect(3*unit,3*unit,1*unit,1*unit)
    draw.fillRect(4*unit,4*unit,1*unit,1*unit)
    draw.fillRect(5*unit,5*unit,1*unit,1*unit)
    draw.fillRect(6*unit,6*unit,1*unit,1*unit)
    draw.fillRect(3*unit,3*unit,1*unit,1*unit)
    draw.fillRect(7*unit,7*unit,1*unit,1*unit)
    draw.fillRect(8*unit,8*unit,1*unit,1*unit)
    draw.fillRect(7*unit,8*unit,1*unit,1*unit)
    draw.fillRect(6*unit,8*unit,1*unit,1*unit)
    draw.fillRect(5*unit,8*unit,1*unit,1*unit)
    draw.fillRect(4*unit,8*unit,1*unit,1*unit)
    draw.fillRect(3*unit,8*unit,1*unit,1*unit)
    draw.fillRect(3*unit,9*unit,1*unit,1*unit)
    draw.fillRect(3*unit,10*unit,1*unit,1*unit)
    draw.fillRect(4*unit,10*unit,1*unit,2*unit)
    draw.fillRect(5*unit,10*unit,1*unit,2*unit)
    draw.fillRect(6*unit,10*unit,1*unit,2*unit)
   draw.fillRect(7*unit,10*unit,1*unit,2*unit)
  draw.fillRect(8*unit,10*unit,1*unit,2*unit)
}




function drawName(){
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    draw.fillRect(1*unit,1*unit,3*unit,1*unit)
    draw.fillRect(4*unit,2*unit,1*unit,6*unit)
    draw.fillRect(1*unit,5*unit,3*unit,1*unit)
    draw.fillRect(0*unit,2*unit,1*unit,6*unit)
    draw.fillRect(7*unit,1*unit,1*unit,7*unit)
    draw.fillRect(7*unit,7*unit,4*unit,1*unit)
    draw.fillRect(12*unit,1*unit,1*unit,7*unit)
    draw.fillRect(12*unit,7*unit,4*unit,1*unit)
    draw.fillRect(18*unit,1*unit,3*unit,1*unit)
    draw.fillRect(17*unit,2*unit,1*unit,6*unit)
    draw.fillRect(17*unit,5*unit,4*unit,1*unit)
    draw.fillRect(21*unit,2*unit,1*unit,6*unit)
    draw.fillRect(24*unit,1*unit,1*unit,7*unit)
    draw.fillRect(25*unit,4*unit,1*unit,1*unit)
    draw.fillRect(26*unit,5*unit,1*unit,1*unit)
    draw.fillRect(27*unit,6*unit,1*unit,1*unit)
    draw.fillRect(28*unit,1*unit,1*unit,7*unit)
}   

function drawHeart(){
    draw.fillRect(1*unit,3*unit,1*unit,3*unit)
    draw.fillRect(2*unit,1*unit,2*unit,1*unit) 
}



function drawCharmander(){
    draw.fillStyle = 'black';
    draw.fillRect(0*unit,4*unit,1*unit,3*unit)
    draw.fillRect(1*unit,2*unit,1*unit,2*unit)
    draw.fillRect(2*unit,1*unit,1*unit,1*unit)
    draw.fillRect(3*unit,1*unit,1*unit,7*unit)

    draw.fillStyle = '#E15241';
    draw.fillRect(3*unit,1*unit,1*unit,5*unit)
    draw.fillRect(4*unit,4*unit,1*unit,3*unit)


}

















   