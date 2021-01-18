
var monkey , monkey_running
var banana ,bananaImage, obj, objImage
var bananaGrp, objgrp;
var ground,bananagrp,objgrp;
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  objImage = loadImage("obstacle.png");
 
}



function setup() {
  //canvas
 createCanvas(600,300);

  //monkey
  monkey = createSprite(40,250,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  //ground
 ground = createSprite(400,280,900,10);
  ground.velocityX= -4;
  console.log(ground.x);
 
  objgrp = new Group();
  bananagrp = new Group();
  
}


function draw() {
background("lightgreen");

 
  //score display
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time :" + survivalTime,400,40);
  
  
  //jumping
    if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -13;
    }
    
   //add gravity
   monkey.velocityY = monkey.velocityY + 0.8;
  
  
  //unending ground 
   ground.x =ground.width/2;
  
  //colliding
   monkey.collide(ground);
  
  object()
  bananafunc();
  drawSprites();
}

//objfunc
function object()
{
   if (frameCount % 300 === 0)
     {
  obj = createSprite(400,260,10,40);
      
        obj.addAnimation("obj", objImage);
        obj.velocityX = -8;
        obj.scale = 0.1;
       console.log(obj.x);
       obj.lifetime = 120
       objgrp.add(obj);
     }
}

//banana func
function bananafunc()
{
  if(frameCount % 80 == 0)
    {
      banana = createSprite(400,200,40,10);
      banana.y = Math.round(random(120,200));
      banana.addAnimation("banana", bananaImage);
      banana.lifetime = 150;
     banana.scale = 0.1;
      banana.velocityX = -8;
      
      bananagrp.add(banana);
    }
}