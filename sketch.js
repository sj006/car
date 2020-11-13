

var car,wall,d;
var speed,weight;




function setup() {
  createCanvas(2000,400);
  car = createSprite(50, 200, 70, 50);
  car.shapeColor="white";
  wall = createSprite(1000,200,60,200);
  wall.shapeColor="white";
 // wall.debug=true;
  car.depth=wall.depth;
  
  speed=random(55,90);
  weight=random(400,1500);
  d = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background("black"); 
  car.velocityX=speed;
  if(wall.x-car.x < car.width/2+wall.width/2 && d<100){
   car.shapeColor="green";
   car.velocityX=0;
  } 
  else if(wall.x-car.x < car.width/2+wall.width/2 && d>100 && d<180){
    car.shapeColor="yellow";
    car.velocityX=0;
   } 
   else if(wall.x-car.x < car.width/2+wall.width/2 && d>180){
    car.shapeColor="red";
    car.velocityX=0;
   } 
    else {
      car.shapeColor="white";
      wall.shapeColor="white";
    }
  
  drawSprites();
}






