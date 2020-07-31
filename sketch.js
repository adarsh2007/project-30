const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Mainground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23;
var polygon,slingshot;
var score=0; 

function preload() {
   
}


function setup() {
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
   
  Mainground=new Ground(500,700,1000,20);
  ground1= new Ground(440,660,330,10);
  ground2=new Ground(900,400,200,10);
  
  //boxes for the 1st ground 1st line
  box1= new Box(310,625,40,60);
  box2 = new Box(355,625,40,60);
  box3 = new Box(400,625,40,60);
  box4 = new Box(445,625,40,60);
  box5 = new Box(490,625,40,60);
  box6 = new Box(535,625,40,60);
  box7 = new Box(580,625,40,60);

  //boxes for the 1st ground 2nd line
  box8 = new Box(355,560,40,60);
  box9 = new Box(400,560,40,60);
  box10 = new Box(445,560,40,60);
  box11 = new Box(490,560,40,60);
  box12 = new Box(535,560,40,60);

  //boxes for the 1st ground 3th line
  box13 = new Box(400,495,40,60);
  box14 = new Box(445,495,40,60);
  box15 = new Box(490,495,40,60);

 //boxes for the 1st ground 4th line
  box16 = new Box(445,430,40,60);
  
  
  //boxes for the 2nd ground 1st line
  box17 = new Box(830,365,40,60);
  box18 = new Box(875,365,40,60);
  box19 = new Box(920,365,40,60);
  box20 = new Box(965,365,40,60);

  //boxes for the 2nd ground 2nd line
  box21 = new Box(875,300,40,60); 
  box22 = new Box(920,300,40,60);
  //boxes for the 2nd ground 3rd line
  box23 = new Box(898,235,40,60);
  
  polygon = new Polygon(70,400,20);
  slingshot= new SlingShot(polygon.body,{x:70,y:350});
  textSize(30);
  Engine.run(engine);
}

function draw() {
  background(0);
  //text(" YOUR SCORE ="+score,50,100);
  ground1.display();
  ground2.display();
  Mainground.display();
  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  polygon.display();
  slingshot.display();
  
 
 




 drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode===32){ 
      slingshot.attach(polygon.body);
  }
}