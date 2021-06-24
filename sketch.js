var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var leaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
 edges= createEdgeSprites();


  rabbit.collide(edges);
  rabbit.x=World.mouseX;

  console.log(apple)
  console.log(leaf)

  var apple = Math.round(random(1,2));
  var leaf = Math.round(random(1,2));
  if (frameCount % 80 == 0){
    if(apple == 1 && leaf == 1){
      spawnapples()
    }
    else{
      spawnleaves()
    }
    }


  drawSprites();
}
function spawnapples() {

 apple = createSprite(random(50,350),0,15,15);
 apple.shapeColor=("red")
 apple.velocityY=2
}
function spawnleaves() {

  leaf = createSprite(random(50,350),0,15,15);
  leaf.shapeColor=("black")
  leaf.velocityY=2

}