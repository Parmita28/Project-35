var dog, happyDog, database, foodS, foodStock
var dogImage, happyDogImage;

function preload(){
 dogImage = loadImage("images/dogImg.png");
 happyDogImage = loadImage("images/dogImg1.png");
}

function setup(){
  createCanvas(500, 500);
  
  dog = createSprite(400,100);
  dog.addImage("dog",dogImage);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDogImage);
  }

  drawSprites();
  text("Note: Press UP_ARROW key to Feed Drago Milk!");
  textSize(30);
  fill("white");
  stroke(30);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x <= 0){
    x = 0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



