
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stone, boy, tree, held;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload(){
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(windowWidth, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	
	tree = new Tree();
	
	mango1 = new Mango(1100,150);
	mango2 = new Mango(1000,180);
	mango3 = new Mango(1050,200);
	mango4 = new Mango(950,250);
	mango5 = new Mango(1070,270);
	mango6 = new Mango(1170,270);
	mango7 = new Mango(1070,110);
	
	stone = new Stone(195,530);
	
	held = new Launcher(stone.body, {x:195, y:530});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);

	ground.display();

	image(boy,200,490,120,270);

	

	//line(chain.pointA.x, chain.pointA.y, stone.body.position.x, stone.body.position.y);
	tree.display();
	held.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();

	stone.display();

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);

	drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
	held.fly();
}

function detectCollision(s, m){
	mangoBodyPos = m.body.position;
	stoneBodyPos = s.body.position;

	var distance = dist(stoneBodyPos.x,stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y);
	
	if(distance <= m.r + s.r){
		Matter.Body.setStatic(m.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:195,y:530});
		held.attach(stone.body);
	}
}
