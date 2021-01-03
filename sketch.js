var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey = createSprite(50,300,10,50);
  ground = createSprite(200,375,900,50);
  
  survivalTime = 0;
}


function draw() {
  background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
    
  
  background(rgb(150,175,250));
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >=319) {
        monkey.velocityY = -13;
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime, 100,50);
  
  ground.velocityX = -4;
  ground.shapeColor = (rgb(25,100,50));
  ground.x = ground.width/2;
  console.log(ground.x)
  
  obstacleGroup();
  bananaGroup();
  drawSprites();
}

function bananaGroup(){
  if(World.frameCount%80 === 0){
    banana = createSprite(300,250,20,20);
    banana.addImage("food", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(175,300));
    banana.velocityX = -2;
    banana.lifetime = 140;
    
  }
}

function obstacleGroup(){
  if(World.frameCount%300 === 0){
    obstacle = createSprite(400,335,20,20);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.y = Math.round(random(350,350));
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
    
  }
}


