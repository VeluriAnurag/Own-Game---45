var Walk 
var walk
var Background
var Spin_attack=0
var Walk2
var walk2
var healthGroup
var health2


function preload(){
   Walk=loadAnimation("Images/Pla1/tile000.png","Images/Pla1/tile001.png","Images/Pla1/tile002.png" ,"Images/Pla1/tile003.png");
   Attack=loadAnimation("Images/Pla1/tile004.png","Images/Pla1/tile005.png","Images/Pla1/tile006.png","Images/Pla1/tile007.png");
  health2=loadImage("Images/MC_Heart.png")
   Walk2=loadAnimation("Images/Pla2/BAD0.png","Images/Pla2/BAD1.png")
   //Attack2=loadAnimation("Images/Pla2/tile002.png","Images/Pla2/tile003.png")
  Background=loadImage("Images/Background1.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  
  walk = createSprite(400,displayHeight-500, 400, 300);
  walk.addAnimation("Begin",Walk);
  walk.addAnimation("attack",Attack);
  walk.scale=5
  healthGroup=new Group();

  

 //walk2=createSprite(800,displayHeight-350,300, 300);
  //walk2.addAnimation("Obstacle",Walk2);
 // walk2.addAnimation("Player2",Attack2);
}

function draw() {
  background(Background);  
  
  if(keyWentDown("space")){
     
     Spin_attack=1
  }
  if(keyWentUp("space")){
  walk.changeAnimation("Begin",Walk);
 }
  if(Spin_attack===1){
    walk.changeAnimation("attack",Attack); 
     Spin_attack=0
   //walk.pause(); 
  }
 if(Spin_attack===0){
  
  walk.changeAnimation("Begin",Walk);
 }
 if(keyWentUp("up")){
 walk
 }

 life();
  drawSprites();
}


function life(){
  
  for(var i=1;i<=5;i++){
   var health= createSprite(120*i,100,20,20);
  
  health.addImage(health2);
  health.scale=0.5  
  healthGroup.add(health);
  }
}