const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1;

function setup() {
  createCanvas(800,400);
  world = engine.world;

    box1 = new Box(700,420,70,70);
    box2 = new Box(700,520,70,70);
    box3 = new Box(700,640,70,70);
    box4 = new Box(700,740,70,70);
    box5 = new Box(700,860,70,70);
    ground=new Ground(600,height,800,20);
    Slingshot=new SlingShot();
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.dispaly(); 
  ground.display();
  //drawSprites();
}