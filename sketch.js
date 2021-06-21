var garden, gardenImg;
var cat, catImg1 , catImg2 , catImg3;
var mouse, mouseImg1 , mouseImg2 , mouseImg3 ;

function preload() {
    //load the images here

  gardenImg = loadImage("images/garden.png");
mouseImg1 = loadAnimation("images/jerryOne.png");
mouseImg2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
mouseImg3 = loadAnimation("images/jerryFour.png");

catImg1 = loadAnimation("images/tomOne.png");
catImg2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
catImg3 = loadAnimation("images/tomFour.png");
}

function setup(){
    
    createCanvas(1000,650);

    //create tom and jerry sprites here
cat = createSprite(800,480,20,20);
cat.addAnimation("sleepingCat", catImg1);
cat.scale= 0.3;

mouse = createSprite(100,520,20,20);
mouse.addAnimation("mouseWithCheese", mouseImg1);
mouse.scale = 0.2;

}

function draw() {

    background(gardenImg);

    //Write condition here to evalute if tom and jerry collide
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  cat.velocityX = 0;
  cat.addAnimation("stoppedCat",catImg3);
  cat.x = 300;
  cat.scale = 0.3;
  mouse.addAnimation("detectiveMouse",mouseImg3);
  mouse.changeAnimation(mouseImg3)
  mouse.scale = 0.2;
}
    drawSprites();
 //garden.display();

}
function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

    cat.velocityX = -6;
    cat.addAnimation("movingCat",catImg2);
cat.changeAnimation("movingCat")
  }

}