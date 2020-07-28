const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var player, lan;
var ground, p1, p2;
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function setup() {
  createCanvas(800,400);

  ground = createSprite(400, 390, 2000, 10);
  ground.shapeColor = color("black");

  p1 = createSprite(390, 300, 250, 10);
  p1.shapeColor = color("black");

  a1 = new Block(300, 275, 30, 40);
  a2 = new Block(330, 275, 30, 40);
  a3 = new Block(360, 275, 30, 40);
  a4 = new Block(390, 275, 30, 40);
  a5 = new Block(420, 275, 30, 40);
  a6 = new Block(450, 275, 30, 40);
  a7 = new Block(480, 275, 30, 40);

  a8 = new Block(330, 235, 30, 40);
  a9 = new Block(360, 235, 30, 40);
  a10 = new Block(390, 235, 30, 40);
  a11 = new Block(420, 235, 30, 40);
  a12 = new Block(450, 235, 30, 40);

  a13 = new Block(360, 195, 30, 40);
  a14 = new Block(390, 195, 30, 40);
  a15 = new Block(420, 195, 30, 40);

  a16 = new Block(390, 155, 30, 40);


  //second pyrmiad

  p2 = createSprite(580, 115, 190, 10);
  p2.shapeColor = color("black");

  b1 = new Block(520, 90, 30, 40);
  b2 = new Block(550, 90, 30, 40);
  b3 = new Block(580, 90, 30, 40);
  b4 = new Block(610, 90, 30, 40);
  b5 = new Block(640, 90, 30, 40);

  b6 = new Block(550, 60, 30, 40);
  b7 = new Block(580, 60, 30, 40);
  b8 = new Block(610, 60, 30, 40);

  b9 = new Block(580, 30, 30, 40);

  player = Bodies.rectangle(100, 200, 30, 30);
  lan = new Launcher(player.body, {x: 100, y: 200});


}

function draw() {
  background(255,255,255); 

  rect(player.position.x, player.position.y, 30, 30);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
  lan.launcher.fly ();
}

function keyPressed() {
  if(keyCode === 32) {
     lan.attach(player.body);
  }
}