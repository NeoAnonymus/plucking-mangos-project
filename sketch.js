
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,bg,tree1;
var launchingForce=100;

function preload(){
  boy=loadImage("boy.png");
  bg=loadImage("bgImage.jpg");
  tree1=loadImage("tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  
	stoneObj=new stone(235,420,30); 

	groundObject=new ground(width/2,600,width,20);
	sling=new slingshot(stoneObj.body,{x:235,y:420})
	mango1=new mango(1100,100,30);
  mango2=new mango(850,200,30);
	mango3=new mango(950,100,30);
	mango4=new mango(1000,200,30);
	mango5=new mango(1160,200,30);

  
 
}

function draw() {
  image(bg ,0,0,1300,600);
  image(tree1 ,700,0,600,600);
  image(boy ,200,340,200,300);
  textSize(25);
  fill("blue")
  text("Press Space to get another chance!!",50 ,50);
  Engine.update(engine)
  

 
  stoneObj.display();
 // treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 mango5.display();
  groundObject.display();
  sling.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
 

}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false)
    }
  }
 