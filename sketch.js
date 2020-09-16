//Create variables here
var dog, happyDog, database, foodS, foodStock,dogIMG1,dogIMG;
function preload()
{
  //load images here
  dogIMG1 = loadImage("images/dogImg1.png")
  dogIMG = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogIMG);
  database = firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  foodS=foodS - 1
  writeStock(foodS)
  dog.changeImage("dog1",dogImg1)
}
  drawSprites();
  //add styles here
textSize(20)
fill("white")
stroke(2);
text("Note: Press UP_Arrow Key To Feed Drago Milk",100,250)
}
function readStock(data){
foodS-data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

