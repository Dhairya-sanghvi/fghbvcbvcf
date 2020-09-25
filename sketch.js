var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	var options={
		restitution:0
	}
	box1=createSprite(400, 660, 200, 20, options,{isStatic:true});
	box1.shapeColor=color("red");
	
    console.log(box1.x);
	box2=createSprite(500, 610, 20, 100, {isStatic:true});
	box2.shapeColor=color("red");

	box3=createSprite(300, 610, 20, 100, {isStatic:true});
	box3.shapeColor=color("red");

	helicopterSprite=createSprite(width/2, 200, 10,10, {isStatic:true});
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,friction:10, isStatic:true, });
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	box1= Bodies.rectangle(400,650,200,20,{restitution:0 ,isStatic:true});
	World.add(world, box1);
    

	Engine.run(engine);
  
}

World.add(world, box2);
World.add(world, box3);
function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
      
  }

  if(keyCode===RIGHT_ARROW){
Matter.Body.setStatic(helicopterSprite, false);
 helicopterSprite.x=helicopterSprite.x+20; 
 helicopterSprite.velocityX=3;
  }


}



