
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,box1,box2,box3,box4,box5,polygon;
var score=0;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 engine = Engine.create();
 world = engine.world;

 text("score:"+score,750,40);
  
  ground= new Ground(400,230,200,10);
  box1= new Box(400,200,30,30);
  box2=new Box(420,200,30,30);
  box3=new Box(395,100,30,30);
  box4=new Box(380,200,30,30);
  //box5=new Box(600,200,30,30);
  polygon=Bodies.circle(70,200,50);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon, { x: 100, y: 200 }); 
  
  
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  //box5.display();
  
  ellipse(polygon.position.x, polygon.position.y, 20, 20);
 

  
}

async function getTime(){
  var response= await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responsejson= await response.json();
  console.log(responsejson);
  var dt=responsejson.datetime;
  console.log(dt);
  var hour=dt.slice(11,13);
  console.log(hour);
}

