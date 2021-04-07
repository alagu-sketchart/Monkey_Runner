var Ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  monkey_dead = loadImage("sprite_7.png");
  
  BananaGroup = createGroup();
  ObstaclesGroup = createGroup();
}

function setup(){
  monkey = createSprite(50,300,10,50);
  
  Ground = createSprite(200,375,900,50);
  monkey.addAnimation("load", monkey_running);
  survivalTime = 0;
}

function draw() {
  background(150,175,250);
  
  obstacleGroup();
  bananaGroup();
  
  monkey.scale = 0.1;
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(Ground);
  
  Ground.velocityX = -4;
  Ground.shapeColor = (rgb(25,100,50));
  Ground.x = Ground.width/2;
  
  if(keyDown("space")&& monkey.y >=319){
        monkey.velocityY = -13;}
  
  if(BananaGroup.collide(monkey)){
      BananaGroup.destroyEach();
      
      survivalTime = survivalTime + Math.round(random(4,10));
  }
  
  if(ObstaclesGroup.collide(monkey)){
    
    ObstaclesGroup.velocityX = 0;
    ObstaclesGroup.lifetime = -1;
        
    BananaGroup.destroyEach();
    BananaGroup.velocityX = 0;
    survivalTime = 0
    
    stroke("red");
    textSize(30);
    fill("red");
    text("GAME OVER", 400,50);
  }
  
  
  stroke("black");
  textSize(20);
  fill("black");
  text("survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function bananaGroup(){
  if(World.frameCount%180 === 0){
    banana = createSprite(300,250,20,20);
    banana.addImage("food", bananaImage);
    banana.setCollider("circle",0,0,175);
    banana.scale = 0.1;
    banana.y = Math.round(random(175,300));
    banana.velocityX = -2;
    banana.lifetime = 140;
    BananaGroup.add(banana);
    //banana.debug = true;
  }
}

function obstacleGroup(){
  if(World.frameCount%100 === 0){
    obstacle = createSprite(400,335,20,20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.setCollider("circle",0,0,200);
    obstacle.scale = 0.1;
    obstacle.y = Math.round(random(350,350));
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    ObstaclesGroup.add(obstacle);
    //obstacle.debug = true;
  }
}