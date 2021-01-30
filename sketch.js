var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg;
var banana;
var survivalTime=0;
var score = 0;

var gameState="play";
var bg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgi = loadImage("c20f25dec6d31c144831e38c0175994a.jpg")
}



function setup() {
  
  createCanvas(400,400);
  bg = createSprite(0,200,400,400); 
  bg.addImage(bgi)
  //bg.x = bg.width/2
  bg.scale = 0.75 ;
  bg.velocityX=-3;
  monkey=createSprite(80,355,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1
  
  ground = createSprite(400,390,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
ground.visible=false;
console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("white");
if(gameState==="play"){
  if(keyDown("w")){
    monkey.velocityY=-8
  }
  monkey.velocityY = monkey.velocityY+0.3
  
  
  if(bg.x<0){
    bg.x = 200;
  }
  if(ground.x<0){
    ground.x = 200;
  }
  
  monkey.collide(ground);  
 
 banana1();
  obstacle1();
  drawSprites();
  
  stroke("white");
textSize(20);
fill("white");
text("Score :"+ score, 100, 70);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);

  
  if(monkey.isTouching(FoodGroup)){
  score++
  FoodGroup.destroyEach();
}
  
  if(monkey.isTouching(obstacleGroup)){
    gameState="end";
  }
}
  else if(gameState==="end"){
    score = 0 
    monkey.destroy();
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    survivalTime=0;
    bg.velocityX=0;
    textSize=20;
    text("Game over",100,200);
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setVelocityEach(0);
    obstacleGroup.setVelocityEach(0);
  }
  
}

function obstacle1(){
  if(frameCount%300===0){
     obstacle = createSprite(400,380,10,40);
     obstacle.velocityX = -10;
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.3;   
     obstacle.lifetime = 50;
    obstacleGroup.add(obstacle);
  }

}
function banana1(){
  if(frameCount%100===0){
     banana = createSprite(400,200,10,40);
     banana.velocityX = -10;
     banana.addImage(bananaImage);
     banana.scale = 0.1;   
     banana.lifetime = 50;
    FoodGroup.add(banana);
 }
}





