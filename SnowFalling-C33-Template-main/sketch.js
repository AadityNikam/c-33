var bg;
var back;

function preLoad(){
bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);

  back = createSprite(400,200,800,400);
  back.addImage(bg);
}

function draw() {
  background(250);  
  drawSprites();
}