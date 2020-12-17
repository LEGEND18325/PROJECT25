
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobject;
var ground;
var dustbin1,dustbin2,dustbin3;
var binimg,bin;
function preload()
{
	binimg=loadImage("dustbingreen.png")
}

function setup() {
createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperobject=new Paper(100,320,70,70)
	ground=new Ground(600,400,1200,20)
    dustbin1=new Dustbin(550,300,25,190)
	dustbin2=new Dustbin(600,380,180,25)
	dustbin3=new Dustbin(650,300,25,190)
  bin= createSprite(600,290,230,25)
  bin.addImage(binimg)
  bin.scale=0.7;
	Engine.run(engine);

	

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);


  paperobject.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 bin.display();
  



  drawSprites();
 
}


function keyPressed(){

if(keyCode === UP_ARROW){


Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-110});


}



}



