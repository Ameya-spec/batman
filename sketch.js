const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
 var raindrops = []
var umbrella;

function setup(){
 createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;
  
    umbrella = new Umbrella(400,400)

    Engine.run(engine);
}

function draw(){
background("black")

drawSprites();

umbrella.display();

if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
}   

