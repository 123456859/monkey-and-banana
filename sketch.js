
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
//var frameCount,FrameRate;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);

  //craeting monkey ---1
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  //craeting ground ====2
  ground=   createSprite(400,350,9000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  score = 0;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
}


function draw() {
   background(255);
  
  stroke("white");
textSize(20);
fill("white");
text("score: "+ score,500,50);

stroke("black");
textSize(20);
fill("black");
// survivalTime = Math.ceil(frameCount/FrameRate())
text("survivalTime: "+ survivalTime ,100,50);


  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground);
  
   if(World.frameCount%80===0){
    position = Math.round(random(1,500));
   var  Food=createSprite(400,200,20,20);
      //Food.addImage(banana.Image);
    console.log(position)
    }
obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  drawSprites();
}
//function banana (){
   


function Obstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
     obstacle.velocityX = -(6 + 3*score/100);
    var rand = Math.round(random(1,6));
    obstacle.addImage(obstacle);
  obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}