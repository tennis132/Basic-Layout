var ball;
var ballimage;
var ball_2;
var ball_2image;
var volleyimage;
function preload()
{
ballimage = loadImage("Soccer Ball.png")
ball_2image = loadAnimation("Bouncy Ball.png", "Soccer Ball.png")
volleyimage = loadImage("Volley Ball.png")
}

function setup() {
  //createCanvas(800,400);
  createCanvas(windowWidth,windowHeight)
  ball = createSprite(width/2,height/2,20,20)
  ball.addImage("soccer",ballimage)
  ball.scale = 0.1
  ball_2 = createSprite(width/4,height/2,20,20)
  ball_2.addAnimation("soccer2",ball_2image)
  ball.addImage("volley",volleyimage)
  ball.changeAnimation("volley")
}
console.log("apple"+"mango")//concatination 
function draw() 
{
  background(30);
textSize(20)
fill ("red")
text(mouseX+","+mouseY,mouseX,mouseY)
drawSprites()
}




