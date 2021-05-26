var draw
var unit = 20;
var x = 0;
var y = 0;
var scale = 1;

const scaleChange = 0.25;
// When the window is loaded, call (use) the init function. 

window.onload = init;

// comment (Command + / or Ctrl + /)
// - Block within code that the computer skips over.
// - Meant to be seen by humans
document.onkeydown = checkKey;
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
    draw.canvas.width = 1000;
    draw.canvas.height = 700;

    updateUI()
}

function checkKey(e) {

    if (e.keyCode == '32') { //space
        x = 0;
        y = 0;

        draw.resetTransform();
    }

    if (e.keyCode == '38') {  // up arrow
        y--;
        draw.translate(0, -unit);
    }
    if (e.keyCode == '39') { // right arrow
        x++;
        draw.translate(unit, 0);
    }
    if (e.keyCode == '40') { //down arrow
        y++;
        draw.translate(0, unit);

    }
    if (e.keyCode == '37') { // left arrow
        x--;
        draw.translate(-unit, 0);
    }
    if (e.keyCode == '187') {
        draw.scale(1 / scale, 1 / scale);
        scale += 0.5;
        draw.scale(scale, scale);
    }
    if (e.keyCode == '189') {
        draw.scale(1 / scale, 1 / scale);
        scale -= scaleChange;
        draw.scale(scale, scale);


    }
    updateUI();
}
function updateUI() {
    document.getElementById("xTranslate").innerHTML = "X : " + x;
    document.getElementById("yTranslate").innerHTML = "Y : " + y;
    document.getElementById("scale").innerHTML = "Scale : " + scale;
}


function drawBackground() {
  draw.fillRect(0,0,unit,unit);
}

function startDrawing() {
    draw.fillRect(2 * unit, 100, 100, 500);
    draw.fillRect(200, 100, 500, 100)
}

function drawDiamond() {
    draw.fillRect(500, 50, 50, 50)
}



function clear() {
    draw.clearRect(0, 0, draw.canvas.width, draw.canvas.height);
}

function drawName() {

}
function drawCursor() {
    draw.fillRect(0, 0, unit, 17 * unit);
    draw.fillRect(unit, unit, unit, unit)
    draw.fillRect(2 * unit, 2 * unit, 1 * unit, 1 * unit)
    draw.fillRect(3 * unit, 3 * unit, 1 * unit, 1 * unit)
    draw.fillRect(3 * unit, 3 * unit, 1 * unit, 1 * unit)
    draw.fillRect(4 * unit, 4 * unit, 1 * unit, 1 * unit)
    draw.fillRect(5 * unit, 5 * unit, 1 * unit, 1 * unit)
    draw.fillRect(6 * unit, 6 * unit, 1 * unit, 1 * unit)
    draw.fillRect(3 * unit, 3 * unit, 1 * unit, 1 * unit)
    draw.fillRect(7 * unit, 7 * unit, 1 * unit, 1 * unit)
    draw.fillRect(8 * unit, 8 * unit, 1 * unit, 1 * unit)
    draw.fillRect(9 * unit, 9 * unit, 1 * unit, 1 * unit)
    draw.fillRect(10 * unit, 10 * unit, 1 * unit, 1 * unit)
    draw.fillRect(7 * unit, 11 * unit, 5 * unit, 1 * unit)
    draw.fillRect(7 * unit, 12 * unit, 1 * unit, 2 * unit)
    // draw.fillRect(6*unit,8*unit,1*unit,1*unit)
    // draw.fillRect(5*unit,8*unit,1*unit,1*unit)
    // draw.fillRect(4*unit,8*unit,1*unit,1*unit)
    // draw.fillRect(3*unit,8*unit,1*unit,1*unit)
    // draw.fillRect(3*unit,9*unit,1*unit,1*unit)
    //     draw.fillRect(3*unit,10*unit,1*unit,1*unit)
    //     draw.fillRect(4*unit,10*unit,1*unit,2*unit)
    //     draw.fillRect(5*unit,10*unit,1*unit,2*unit)
    //     draw.fillRect(6*unit,10*unit,1*unit,2*unit)
    //    draw.fillRect(7*unit,10*unit,1*unit,2*unit)
    //   draw.fillRect(8*unit,10*unit,1*unit,2*unit)
}




function drawName() {
    draw.fillStyle = 'black';
    draw.save();
    draw.translate(20 * unit, 25 * unit)
    draw.scale(0.5, 0.25)


    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    // draw.fillRect(*unit,*unit,*unit,*unit)
    draw.fillRect(1 * unit, 1 * unit, 3 * unit, 1 * unit)
    draw.fillRect(4 * unit, 2 * unit, 1 * unit, 6 * unit)
    draw.fillRect(1 * unit, 5 * unit, 3 * unit, 1 * unit)
    draw.fillRect(0 * unit, 2 * unit, 1 * unit, 6 * unit)
    draw.fillRect(7 * unit, 1 * unit, 1 * unit, 7 * unit)
    draw.fillRect(7 * unit, 7 * unit, 4 * unit, 1 * unit)
    draw.fillRect(12 * unit, 1 * unit, 1 * unit, 7 * unit)
    draw.fillRect(12 * unit, 7 * unit, 4 * unit, 1 * unit)
    draw.fillRect(18 * unit, 1 * unit, 3 * unit, 1 * unit)
    draw.fillRect(17 * unit, 2 * unit, 1 * unit, 6 * unit)
    draw.fillRect(17 * unit, 5 * unit, 4 * unit, 1 * unit)
    draw.fillRect(21 * unit, 2 * unit, 1 * unit, 6 * unit)
    draw.fillRect(24 * unit, 1 * unit, 1 * unit, 7 * unit)
    draw.fillRect(25 * unit, 4 * unit, 1 * unit, 1 * unit)
    draw.fillRect(26 * unit, 5 * unit, 1 * unit, 1 * unit)
    draw.fillRect(27 * unit, 6 * unit, 1 * unit, 1 * unit)
    draw.fillRect(28 * unit, 1 * unit, 1 * unit, 7 * unit)
    draw.restore();
}

function drawHeart() {
    draw.fillRect(1 * unit, 3 * unit, 1 * unit, 3 * unit)
    draw.fillRect(2 * unit, 1 * unit, 2 * unit, 1 * unit)
}



function drawCharmander() {
    draw.fillStyle = 'black';
    draw.fillRect(0 * unit, 4 * unit, 1 * unit, 3 * unit)
    draw.fillRect(1 * unit, 2 * unit, 1 * unit, 2 * unit)
    draw.fillRect(2 * unit, 1 * unit, 1 * unit, 1 * unit)
    draw.fillRect(3 * unit, 0 * unit, 1 * unit, 1 * unit)
    draw.fillRect(4 * unit, 1 * unit, 1 * unit, 3 * unit)
    draw.fillRect(5 * unit, 4 * unit, 1 * unit, 3 * unit)
    draw.fillRect(4 * unit, 7 * unit, 1 * unit, 2 * unit)
    draw.fillRect(5 * unit, 9 * unit, 1 * unit, 1 * unit)
    draw.fillRect(6 * unit, 10 * unit, 2 * unit, 1 * unit)
    draw.fillRect(8 * unit, 8 * unit, 1 * unit, 3 * unit)
    draw.fillRect(9 * unit, 7 * unit, 1 * unit, 1 * unit)
    draw.fillRect(10 * unit, 5 * unit, 1 * unit, 2 * unit)
    draw.fillRect(11 * unit, 3 * unit, 1 * unit, 2 * unit)
    draw.fillRect(12 * unit, 1 * unit, 1 * unit, 2 * unit)
    draw.fillRect(13 * unit, 0 * unit, 4 * unit, 1 * unit)
    draw.fillRect(17 * unit, 1 * unit, 1 * unit, 1 * unit)
    draw.fillRect(18 * unit, 2 * unit, 1 * unit, 2 * unit)
    draw.fillRect(19 * unit, 4 * unit, 1 * unit, 1 * unit)
    draw.fillRect(20 * unit, 5 * unit, 1 * unit, 3 * unit)
    draw.fillRect(19 * unit, 8 * unit, 1 * unit, 1 * unit)
    draw.fillRect(18 * unit, 8 * unit, 2 * unit, 1 * unit)
    draw.fillRect(15 * unit, 9 * unit, 3 * unit, 1 * unit)
    draw.fillRect(15 * unit, 9 * unit, 3 * unit, 1 * unit)
    draw.fillRect(15 * unit, 9 * unit, 3 * unit, 1 * unit)
    draw.fillRect(16 * unit, 10 * unit, 1 * unit, 2 * unit)
    draw.fillRect(17 * unit, 12 * unit, 1 * unit, 1 * unit)
    draw.fillRect(14 * unit, 13 * unit, 3 * unit, 1 * unit)
    draw.fillRect(15 * unit, 12 * unit, 1 * unit, 1 * unit)
    draw.fillRect(11 * unit, 14 * unit, 3 * unit, 1 * unit)
    draw.fillRect(12 * unit, 15 * unit, 1 * unit, 1 * unit)
    draw.fillRect(9 * unit, 16 * unit, 3 * unit, 1 * unit)
    draw.fillRect(8 * unit, 13 * unit, 1 * unit, 4 * unit)
    draw.fillRect(9 * unit, 14 * unit, 1 * unit, 1 * unit)
    draw.fillRect(7 * unit, 13 * unit, 1 * unit, 1 * unit)
    draw.fillRect(7 * unit, 10 * unit, 1 * unit, 3 * unit)
    draw.fillRect(5 * unit, 13 * unit, 2 * unit, 1 * unit)
    draw.fillRect(4 * unit, 12 * unit, 1 * unit, 1 * unit)
    draw.fillRect(3 * unit, 10 * unit, 1 * unit, 2 * unit)
    draw.fillRect(2 * unit, 7 * unit, 1 * unit, 3 * unit)
    draw.fillRect(1 * unit, 7 * unit, 1 * unit, 1 * unit)
    draw.fillRect(13 * unit, 10 * unit, 1 * unit, 2 * unit)
    draw.fillRect(16 * unit, 5 * unit, 1 * unit, 4 * unit)
    draw.fillRect(15 * unit, 3 * unit, 1 * unit, 6 * unit)




    draw.fillStyle = '#E15241';//fire
    draw.fillRect(3 * unit, 8 * unit, 1 * unit, 2 * unit)
    draw.fillRect(4 * unit, 9 * unit, 1 * unit, 3 * unit)
    draw.fillRect(5 * unit, 8 * unit, 1 * unit, 3 * unit)
    draw.fillRect(6 * unit, 9 * unit, 1 * unit, 4 * unit)
    draw.fillRect(8 * unit, 10 * unit, 1 * unit, 3 * unit)
    draw.fillRect(9 * unit, 8 * unit, 1 * unit, 6 * unit)
    draw.fillRect(10 * unit, 7 * unit, 1 * unit, 9 * unit)
    draw.fillRect(11 * unit, 5 * unit, 1 * unit, 9 * unit)
    draw.fillRect(12 * unit, 3 * unit, 1 * unit, 8 * unit)
    draw.fillRect(13 * unit, 1 * unit, 1 * unit, 10 * unit)
    draw.fillRect(14 * unit, 0 * unit, 1 * unit, 11 * unit)
    draw.fillRect(13 * unit, 10 * unit, 1 * unit, 2 * unit)
    draw.fillRect(15 * unit, 1 * unit, 2 * unit, 3 * unit)
    draw.fillRect(16 * unit, 1 * unit, 2 * unit, 3 * unit)
    draw.fillRect(17 * unit, 1 * unit, 1 * unit, 8 * unit)
    draw.fillRect(18 * unit, 4 * unit, 1 * unit, 4 * unit)
    draw.fillRect(19 * unit, 5 * unit, 1 * unit, 3 * unit)
    draw.fillRect(15 * unit, 7 * unit, 1 * unit, 2 * unit)
    draw.fillRect(16 * unit, 7 * unit, 1 * unit, 2 * unit)









}













