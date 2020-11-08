
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,480,1600,70);
	paper = new Paper(200,200,40);
	dustbin1= new dust(900,435,200,20);
	dustbin2=new dust(800,395,20,100);
	dustbin3=new dust(1000,395,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#F0FFFF");
  
  drawSprites();
  ground.display();    
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-65});   
	 }
   }


