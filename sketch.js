
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var gameState;
function preload()
{
	
}

function setup() {
	createCanvas(1000,800);
   
   var ball_options=
   {
	   isStatic:false,
	   restitution: 0.3,
	   friction:0,
	   density:1.2
   }

	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(100,400,20,ball_options);
	World.add(world,ball);
	//Create the Bodies Here.
var wall1=createSprite(200,450,2000,20);
var wall2=createSprite(900,250,200,20);
var wall3=createSprite(800,210,20,100);
	Engine.run(engine);
	ellipseMode(RADIUS);
}


function draw() {
  
  if(gameState==="play")
  {
    background("black");
	textSize(10);
	fill("white");
	text("papers should be in dustbin",200,200);
	Matter.Body.applyForce(ball.body,ball.body.position,
		{
			x:12,
			y: -13
		}
		)

  }

  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
 
}



