var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var output = document.getElementById("output");
var quadrato = {
  x:0,
  y:0,
  width: 50,
  height: 50,
  movement: 1,
  draw: function(ctx){
    ctx.clearRect(0,0,500,500);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
};

document.addEventListener("keydown", function(e){
  var key = e.keyCode;
  output.innerHTML = key;

  switch (key){
    case 84: //t
      quadrato.draw(ctx);
      break;
    case 39: //right
      quadrato.x +=quadrato.movement;
      quadrato.draw(ctx);
      break;
    case 38: //left
      quadrato.y -=quadrato.movement;
      quadrato.draw(ctx);
      break;
    case 37: //up
      quadrato.x -=quadrato.movement;
      quadrato.draw(ctx);
      break;
    case 40: //down
      quadrato.y +=quadrato.movement;
      quadrato.draw(ctx);
      break;
    case 49: //1
      quadrato.movement = 1;
      break;
    case 50: //2
      quadrato.movement = 2;
      break;
    case 51: //3
      quadrato.movement = 3;
      break;
    case 52: //4
      quadrato.movement = 4;
      break;
    case 53: //5
      quadrato.movement = 10;
      break;
  }


});
