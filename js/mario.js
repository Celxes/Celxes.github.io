function animateMario(x, direction, type) {
  clear()
  drawBackground()
  var xPosition = 50*unit;
  var scale = 0.4;

  const characterWeight = 50; 
  const gravity = 9.8 
  const peak = gravity*characterWeight
  const velocity = 0.5 * time * time*gravity
  if (isJumping) {
    time++;
    if (isGoingUp) {
      characterY -= velocity;
      if (characterY < peak) {
        isGoingUp = false;
    
      }
     
    } else {
      characterY += velocity;
      if (characterY > 39*unit) {
        characterY = 39*unit;
        isJumping = false;
        isGoingUp = true;
        time = 0;
      }

    }
  } 









  draw.save();
  draw.scale(scale,scale);
  draw.translate(xPosition+(x*unit), characterY);
  if (direction == -1) {
    draw.scale(direction,1);
    draw.translate(-21*unit, 0);
  }
  if (type == 0) {
    drawMario();
    if (isJumping) {
        setTimeout("animateMario(characterX,direction,0)",30) 

        
    }
  } else if (type == 1) {
    draw.translate(0,2*unit)
    drawMarioWalk();
    setTimeout("animateMario(characterX,direction,2)",150)
  }
  else if (type == 2) {
    draw.translate(0,1*unit)
      drawMarioWalk2();
      setTimeout("animateMario(characterX,direction,3)",150)
    }
    else if (type == 3) {
      drawMarioWalk3();
      setTimeout("animateMario(characterX,direction,0)",150)
    }
    
  
  
  draw.restore();
}
function drawMario() {
 
  drawFace()
  draw.fillStyle = "#A33D2E";

  draw.fillRect(8 * unit, 8 * unit, 1 * unit, 3 * unit)
  draw.fillRect(9 * unit, 10 * unit, 4 * unit, 1 * unit)
  draw.fillRect(12 * unit, 9 * unit, 1 * unit, 1 * unit)
  draw.fillRect(7 * unit, 11 * unit, 1 * unit, 4 * unit)
  draw.fillRect(6 * unit, 13 * unit, 1 * unit, 2 * unit)
  draw.fillRect(8 * unit, 12 * unit, 1 * unit, 3 * unit)
  draw.fillRect(10 * unit, 10 * unit, 5 * unit, 1 * unit)
  draw.fillRect(11 * unit, 11 * unit, 1 * unit, 3 * unit)
  draw.fillRect(10 * unit, 11 * unit, 1 * unit, 3 * unit)
  draw.fillRect(9 * unit, 11 * unit, 1 * unit, 3 * unit)
  draw.fillRect(12 * unit, 12 * unit, 1 * unit, 3 * unit)
  draw.fillRect(13 * unit, 12 * unit, 1 * unit, 3 * unit)
  draw.fillRect(14 * unit, 14 * unit, 1 * unit, 1 * unit)
  draw.fillRect(12 * unit, 15 * unit, 3 * unit, 1 * unit)
  draw.fillRect(6 * unit, 15 * unit, 3 * unit, 1 * unit)
  draw.fillStyle = "#6A6B20";

  draw.fillRect(7 * unit, 8 * unit, 1 * unit, 3 * unit)
  draw.fillRect(6 * unit, 8 * unit, 1 * unit, 4 * unit)
  draw.fillRect(5 * unit, 9 * unit, 1 * unit, 2 * unit)
  draw.fillRect(9 * unit, 8 * unit, 1 * unit, 2 * unit)
  draw.fillRect(10 * unit, 8 * unit, 1 * unit, 2 * unit)
  draw.fillRect(11 * unit, 8 * unit, 1 * unit, 2 * unit)
  draw.fillRect(12 * unit, 8 * unit, 1 * unit, 1 * unit)
  draw.fillRect(13 * unit, 9 * unit, 3 * unit, 1 * unit)
  draw.fillRect(13 * unit, 10 * unit, 3 * unit, 1 * unit)
  draw.fillRect(13 * unit, 11 * unit, 4 * unit, 1 * unit)
  draw.fillRect(14 * unit, 12 * unit, 1 * unit, 1 * unit)
  draw.fillRect(4 * unit, 10 * unit, 1 * unit, 1 * unit)
  draw.fillRect(13 * unit, 16 * unit, 3 * unit, 1 * unit)
  draw.fillRect(13 * unit, 17 * unit, 4 * unit, 1 * unit)
  draw.fillRect(5 * unit, 16 * unit, 3 * unit, 1 * unit)
  draw.fillRect(4 * unit, 17 * unit, 4 * unit, 1 * unit)


  draw.fillStyle = "#D9A042";

  draw.fillRect(15 * unit, 12 * unit, 2 * unit, 1 * unit)
  draw.fillRect(14 * unit, 13 * unit, 3 * unit, 1 * unit)
  draw.fillRect(15 * unit, 14 * unit, 2 * unit, 1 * unit)
  draw.fillRect(4 * unit, 11 * unit, 2 * unit, 1 * unit)
  draw.fillRect(4 * unit, 12 * unit, 3 * unit, 1 * unit)
  draw.fillRect(4 * unit, 13 * unit, 2 * unit, 1 * unit)
  draw.fillRect(8 * unit, 11 * unit, 1 * unit, 1 * unit)
  draw.fillRect(12 * unit, 11 * unit, 1 * unit, 1 * unit)

  



}




function drawMarioWalk() {
  drawFace2()
  draw.fillStyle = "#A33D2E";
  // draw.fillRect(7 * unit, 1 * unit, 5 * unit, 1 * unit)
  // draw.fillRect(6 * unit, 2 * unit, 9 * unit, 1 * unit)
  // draw.fillRect(6 * unit, 10 * unit, 1 * unit, 1 * unit)
  draw.fillRect(6 * unit, 11 * unit, 8 * unit, 1 * unit)
  draw.fillRect(6 * unit, 12 * unit, 8 * unit, 1 * unit)
  draw.fillRect(5 * unit, 13 * unit, 3 * unit, 1 * unit)
  draw.fillRect(9 * unit, 13 * unit, 4 * unit, 1 * unit)
  draw.fillRect(5 * unit, 12 * unit, 1 * unit, 1 * unit)




  draw.fillStyle = "#6A6B20";
  // draw.fillRect(6 * unit, 3 * unit, 3 * unit, 1 * unit)
  // draw.fillRect(7 * unit, 3 * unit, 1 * unit, 3 * unit)
  // draw.fillRect(8 * unit, 5 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(5 * unit, 4 * unit, 1 * unit, 3 * unit)
  // draw.fillRect(6 * unit, 6 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(11 * unit, 3 * unit, 1 * unit, 2 * unit)
  // draw.fillRect(12 * unit, 5 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(11 * unit, 6 * unit, 4 * unit, 1 * unit)
  draw.fillRect(6 * unit, 8 * unit, 7 * unit, 1 * unit)
  draw.fillRect(6 * unit, 9 * unit, 7 * unit, 1 * unit)
  draw.fillRect(7 * unit, 10 * unit, 6 * unit, 1 * unit)
  draw.fillRect(8 * unit, 14 * unit, 3 * unit, 1 * unit)
  draw.fillRect(8 * unit, 15 * unit, 4 * unit, 1 * unit)
  draw.fillRect(4 * unit, 11 * unit, 2 * unit, 1 * unit)
  draw.fillRect(4 * unit, 11 * unit, 1 * unit, 3 * unit)
  draw.fillRect(3 * unit, 13 * unit, 1 * unit, 2 * unit)











  draw.fillStyle = "#D9A042";
  // draw.fillRect(10 * unit, 3 * unit, 1 * unit, 5 * unit)
  // draw.fillRect(9 * unit, 3 * unit, 1 * unit, 5 * unit)
  // draw.fillRect(6 * unit, 4 * unit, 1 * unit, 2 * unit)
  // draw.fillRect(8 * unit, 4 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(11 * unit, 5 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(12 * unit, 3 * unit, 1 * unit, 2 * unit)
  // draw.fillRect(13 * unit, 4 * unit, 2 * unit, 1 * unit)
  // draw.fillRect(13 * unit, 5 * unit, 3 * unit, 1 * unit)
  // draw.fillRect(7 * unit, 7 * unit, 7 * unit, 1 * unit)
  draw.fillRect(13 * unit, 10 * unit, 2 * unit, 1 * unit)
  draw.fillRect(13 * unit, 9 * unit, 3 * unit, 1 * unit)
  draw.fillRect(14 * unit, 8 * unit, 1 * unit, 1 * unit)
  draw.fillRect(14 * unit, 7 * unit, 1 * unit, 1 * unit)
  draw.fillRect(4 * unit, 10 * unit, 2 * unit, 1 * unit)
  draw.fillRect(5 * unit, 9 * unit, 1 * unit, 1 * unit)
  // draw.fillRect(8*unit,6*unit,1*unit,1*unit)
  // draw.fillRect(7*unit,6*unit,1*unit,1*unit)







}
function drawFace() {
  draw.fillStyle = "#A33D2E";
  draw.fillRect(7 * unit, 1 * unit, 5 * unit, 1 * unit)
  draw.fillRect(6 * unit, 2 * unit, 9 * unit, 1 * unit)
  draw.fillStyle = "#6A6B20";
  draw.fillRect(6 * unit, 3 * unit, 3 * unit, 1 * unit)
  draw.fillRect(7 * unit, 3 * unit, 1 * unit, 3 * unit)
  draw.fillRect(8 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(5 * unit, 4 * unit, 1 * unit, 3 * unit)
  draw.fillRect(6 * unit, 6 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 3 * unit, 1 * unit, 2 * unit)
  draw.fillRect(12 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 6 * unit, 4 * unit, 1 * unit)
  draw.fillStyle = "#D9A042";
  draw.fillRect(10 * unit, 3 * unit, 1 * unit, 5 * unit)
  draw.fillRect(9 * unit, 3 * unit, 1 * unit, 5 * unit)
  draw.fillRect(6 * unit, 4 * unit, 1 * unit, 2 * unit)
  draw.fillRect(8 * unit, 4 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(12 * unit, 3 * unit, 1 * unit, 2 * unit)
  draw.fillRect(13 * unit, 4 * unit, 2 * unit, 1 * unit)
  draw.fillRect(13 * unit, 5 * unit, 3 * unit, 1 * unit)
  draw.fillRect(7 * unit, 7 * unit, 7 * unit, 1 * unit)
  draw.fillRect(7 * unit, 6 * unit, 2 * unit, 1 * unit)

}
function drawFace2() {
  draw.fillStyle = "#A33D2E";
  draw.fillRect(7 * unit, 1 * unit, 5 * unit, 1 * unit)
  draw.fillRect(6 * unit, 2 * unit, 9 * unit, 1 * unit)
  draw.fillRect(6 * unit, 10 * unit, 1 * unit, 1 * unit)
  draw.fillStyle = "#6A6B20";
  draw.fillRect(6 * unit, 3 * unit, 3 * unit, 1 * unit)
  draw.fillRect(7 * unit, 3 * unit, 1 * unit, 3 * unit)
  draw.fillRect(8 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(5 * unit, 4 * unit, 1 * unit, 3 * unit)
  draw.fillRect(6 * unit, 6 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 3 * unit, 1 * unit, 2 * unit)
  draw.fillRect(12 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 6 * unit, 4 * unit, 1 * unit)
  draw.fillStyle = "#D9A042";
  draw.fillRect(10 * unit, 3 * unit, 1 * unit, 5 * unit)
  draw.fillRect(9 * unit, 3 * unit, 1 * unit, 5 * unit)
  draw.fillRect(6 * unit, 4 * unit, 1 * unit, 2 * unit)
  draw.fillRect(8 * unit, 4 * unit, 1 * unit, 1 * unit)
  draw.fillRect(11 * unit, 5 * unit, 1 * unit, 1 * unit)
  draw.fillRect(12 * unit, 3 * unit, 1 * unit, 2 * unit)
  draw.fillRect(13 * unit, 4 * unit, 2 * unit, 1 * unit)
  draw.fillRect(13 * unit, 5 * unit, 3 * unit, 1 * unit)
  draw.fillRect(7 * unit, 7 * unit, 7 * unit, 1 * unit)
  draw.fillRect(8 * unit, 6 * unit, 1 * unit, 1 * unit)
  draw.fillRect(7 * unit, 6 * unit, 1 * unit, 1 * unit)

}



function drawBackground() {
  drawBlocks()
}
function drawBlock() {
  draw.fillRect(1 * unit, 16 * unit, 16 * unit, 1 * unit)
  draw.fillRect(1 * unit, 4 * unit, 16 * unit, 1 * unit)
  draw.fillRect(1 * unit, 8 * unit, 16 * unit, 1 * unit)
  draw.fillRect(1 * unit, 12 * unit, 16 * unit, 1 * unit)
  draw.fillRect(8 * unit, 1 * unit, 1 * unit, 4 * unit)
  draw.fillRect(16 * unit, 1 * unit, 1 * unit, 4 * unit)
  draw.fillRect(4 * unit, 4 * unit, 1 * unit, 4 * unit)
  draw.fillRect(12 * unit, 4 * unit, 1 * unit, 4 * unit)
  draw.fillRect(8 * unit, 8 * unit, 1 * unit, 4 * unit)
  draw.fillRect(16 * unit, 8 * unit, 1 * unit, 4 * unit)
  draw.fillRect(5 * unit, 12 * unit, 1 * unit, 4 * unit)
  draw.fillRect(12 * unit, 12 * unit, 1 * unit, 4 * unit)

  draw.fillStyle = '#BA5525'
  draw.fillRect(1 * unit, 1 * unit, 7 * unit, 3 * unit)
  draw.fillRect(9 * unit, 1 * unit, 7 * unit, 3 * unit)
  draw.fillRect(1 * unit, 5 * unit, 3 * unit, 3 * unit)
  draw.fillRect(5 * unit, 5 * unit, 7 * unit, 3 * unit)
  draw.fillRect(13 * unit, 5 * unit, 4 * unit, 3 * unit)
  draw.fillRect(1 * unit, 9 * unit, 7 * unit, 3 * unit)
  draw.fillRect(9 * unit, 9 * unit, 7 * unit, 3 * unit)
  draw.fillRect(1 * unit, 13 * unit, 4 * unit, 3 * unit)
  draw.fillRect(6 * unit, 13 * unit, 6 * unit, 3 * unit)
  draw.fillRect(13 * unit, 13 * unit, 4 * unit, 3 * unit)
}
  function drawBlocks() {
    for (column = 0; column < 13; column++) {
      draw.save();
      draw.scale(0.25, 0.25);
      draw.translate(column * unit * 16, 1800)
      drawBlock();
      draw.restore();
    }
  
  }
  
  function drawMarioWalk2() {
      // var xPosition = 50*unit;
      // var yPosition = 46*unit;
      // var scale = 0.4;
      // draw.save();
      // draw.scale(scale,scale);
      // draw.translate(xPosition+(x*unit), yPosition);
      // draw.restore();
    drawFace2()


    draw.fillStyle = "#6A6B20";
    // draw.fillRect(1*unit,1*unit,1*unit,1*unit)
    draw.fillRect(6*unit,8*unit,6*unit,1*unit)
    draw.fillRect(5*unit,9*unit,4*unit,1*unit)
    draw.fillRect(11*unit,9*unit,2*unit,1*unit)
    draw.fillRect(5*unit,10*unit,3*unit,1*unit)
    draw.fillRect(5*unit,11*unit,4*unit,1*unit)
    draw.fillRect(6*unit,12*unit,2*unit,1*unit)
    draw.fillRect(7*unit,13*unit,1*unit,1*unit)
    draw.fillRect(7*unit,15*unit,7*unit,1*unit)
    draw.fillRect(7*unit,16*unit,4*unit,1*unit)
    draw.fillRect(10*unit,14*unit,3*unit,1*unit)


    draw.fillStyle = "#A33D2E";
    draw.fillRect(9*unit,9*unit,2*unit,1*unit)
    draw.fillRect(9*unit,9*unit,1*unit,3*unit)
    draw.fillRect(10*unit,11*unit,1*unit,1*unit)
    draw.fillRect(11*unit,10*unit,1*unit,4*unit)
    draw.fillRect(12*unit,10*unit,1*unit,4*unit)
    draw.fillRect(13*unit,11*unit,1*unit,2*unit)
    draw.fillRect(10*unit,13*unit,1*unit,1*unit)
    draw.fillRect(7*unit,14*unit,1*unit,1*unit)
    draw.fillRect(6*unit,13*unit,1*unit,1*unit)
    draw.fillRect(5*unit,12*unit,1*unit,1*unit)
    draw.fillRect(8*unit,14*unit,2*unit,1*unit)




    draw.fillStyle = "#D9A042";
    draw.fillRect(13*unit,10*unit,3*unit,1*unit)
    
     
  
  }


  function drawMarioWalk3(){
  drawFace2()


  draw.fillStyle = "#A33D2E";
  draw.fillRect(8*unit,8*unit,2*unit,1*unit)
  draw.fillRect(8*unit,8*unit,2*unit,3*unit)
  draw.fillRect(8*unit,11*unit,1*unit,4*unit)
  draw.fillRect(9*unit,9*unit,3*unit,4*unit)
  draw.fillRect(8*unit,14*unit,7*unit,1*unit)
  draw.fillRect(8*unit,13*unit,7*unit,1*unit)
  draw.fillRect(5*unit,14*unit,8*unit,1*unit)
  draw.fillRect(6*unit,13*unit,9*unit,1*unit)
  draw.fillRect(7*unit,12*unit,6*unit,1*unit)
  draw.fillRect(6*unit,15*unit,3*unit,1*unit)
  draw.fillRect(12*unit,15*unit,3*unit,1*unit)
  draw.fillRect(11*unit,10*unit,3*unit,3*unit)
  
  


  }