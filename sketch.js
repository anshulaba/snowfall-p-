const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var maxsnow=100;

function preload()
{
  bgimg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=engine.world;

  groundobj=new ground();
  snowball=new snow();
}

function draw() {
  background(bgimg);  
  Engine.update(engine);
  
  for(var i=0;i<maxsnow;i++)
  {
    drop.push(new snow(random(0,400),random(0,400)));
  }

  snowball.display();
  groundobj.display();
  drawSprites();
}















