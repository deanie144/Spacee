var bg, astronaut;
var sleep, brush, gym, eat, drink, move;
var bath;

function preload() {
  bg= loadImage("images/iss.png");
  sleep - loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
}




function setup() {
  createCanvas(800,400);

  astronaut =  createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
  drawSprites();

  text("Up Arrow = Brushing,", 100, 150);
  text("Down Arrow = Gymming", 100, 200);
  text("Left Arrow = Eating", 100, 250);
  text("Right Arrow = Bathing", 100, 300);
  text("m key = Moving", 100, 350);

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming", gym);
  astronaut.changeAnimation("gyming")
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  } 
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving")
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}