
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,bananaGroup,invisibleground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,345,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
 
  ground=createSprite(400,380,-900000000000000000,10)
  
  ground.velocityX=-4;
  ground.X=ground.width/2;
  
  invisibleground=createSprite(400,390,1000,10)
  invisibleground.visible=false;
  score=0
  FoodGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
background("yellow");
  
  
  
  if(keyDown("space")&&monkey.y>=100){
   
    monkey.velocityY=-13;
     
  }
  
//add gravity
  monkey.velocityY =monkey.velocityY + 0.8
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  
  monkey.collide(ground);
  
  score=Math.ceil(frameCount/frameRate())
  textSize(19)
  fill("black")
  
  food();
  obstacles();
  
  drawSprites();
  text("Survival Time:"+score,240,40)
}

function food(){
  if(frameCount % 80 ===0){
  var banana = createSprite(300,200,30,30)
  banana.addImage(bananaImage);
  banana.scale=0.2 
  banana.x=Math.round(random(120,600))
  banana.y=Math.round(random(150,210))
  banana.lifetime=546
  banana.velocityX=-8;
  bananaGroup.add(banana)
  }
  
  
}
function obstacles(){
  if(frameCount % 300===0){
    var obstacle = createSprite(400,340,50,30)
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.4
    obstacle.x=Math.round(random(390,400))
    obstacle.velocityX=-6
    obstacle.scale=0.2
  }
  
}




