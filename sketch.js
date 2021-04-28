
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world, paper1;



function setup() {
	createCanvas(1200,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(900,550);
      paper1=new Paper(200,550,60,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);


  groundObject.display();
  dustbinObj.display();
  paper1.display();

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-195});
    }
}

