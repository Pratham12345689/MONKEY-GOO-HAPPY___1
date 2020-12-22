
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);

  monkey = createSprite(50,500,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,550,1200,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  foodGroup=new Group();
  obstacleGroup=new Group();

  
}


function draw() {
  background("white");
  if(keyDown("space")&& monkey.y >= 509) {
    monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  if (ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  monkey.collide(ground);
  spawnbanana();
   spawnObstacle();
drawSprites();
  

  
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
  var  banana = createSprite(600,490,40,10);
  banana.addImage(bananaImage)
    banana.y = Math.round(random(400,450))
    banana.scale = 0.07;
    banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    monkey.depth = banana.depth
    monkey.depth = monkey.depth + 1;
    foodGroup.add(banana);
    }
}
function spawnObstacle() {
  //write code here to spawn the  obstacles
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,520,40,10);
     obstacle.addImage( obstacleImage)
   obstacle.scale = 0.4;
     obstacle.velocityX = -3;
     obstacle.scale=0.15;
    
    
    //assigning lifetime to the variable
     obstacle.lifetime = 200
     obstacleGroup.add( obstacle);
    
    
  
    }
}






