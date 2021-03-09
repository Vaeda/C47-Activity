var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = SERVE;
var score = 0;
var dog, dog_left, dog_right;
var play, playImg;
var bee, bee_left, bee_right;
var bee1, bee2, bee3, bee4;
var heart1, heart2, heart3, heartImg;
var gameOver, gameOverImg;
var lives = 3;

function preload() {
  dog_right = loadAnimation("images/dog.png");
  dog_left = loadAnimation("images/flipdog.png");
  playImg = loadImage("images/play.png");
  bee_left = loadAnimation("images/bee.png");
  bee_right = loadAnimation("images/flipbee.png");
  gameOverImg = loadImage("images/gameOver.webp");
  heartImg = loadImage("images/heart.png");
}

function setup() {
  createCanvas(1000, 600);
  dog = createSprite(180, 550, 50, 50);
  dog.addAnimation("movingLeft",dog_left);
  dog.addAnimation("movingRight",dog_right);
  dog.scale = 0.15;

  play = createSprite(500, 400, 50, 50);
  play.addImage(playImg);
  play.scale = 0.1;

  bee1 = createSprite(830, 425, 10, 10);//horizontal
  bee1.addAnimation("movingLeft", bee_left);
  bee1.addAnimation("movingRight", bee_right);
  bee1.scale = 0.08;
  bee1.velocityX = -7;
  bee1.velocityY = 0;

  bee2 = createSprite(930, 100, 10, 10);//vertical
  bee2.addAnimation("movingLeft", bee_left);
  bee2.addAnimation("movingRight", bee_right);
  bee2.scale = 0.08;
  bee2.velocityX = 0;
  bee2.velocityY = 7;

  bee3 = createSprite(75, 80, 10, 10);//horizontal
  bee3.addAnimation("movingRight", bee_right);
  bee3.addAnimation("movingLeft", bee_left);
  bee3.scale = 0.08;
  bee3.velocityX = 7;
  bee3.velocityY = 0;

  bee4 = createSprite(930, 520, 10, 10);//horizontal
  bee4.addAnimation("movingLeft", bee_left);
  bee4.addAnimation("movingRight", bee_right);
  bee4.scale = 0.08;
  bee4.velocityX = -7;
  bee4.velocityY = 0;

  //bee5 = createSprite(930, 520, 10, 10);//horizontal
  //bee5.addAnimation("movingLeft", bee_left);
  //bee5.addAnimation("movingRight", bee_right);
  //bee5.scale = 0.08;
  //bee5.velocityX = -7;
  //bee5.velocityY = 0;

  gameOver = createSprite(200, 300, 50, 50);
  gameOver.addImage(gameOverImg);

  heart1 = createSprite(30, 30, 20, 20);
  heart1.addImage(heartImg);
  heart1.scale = 0.3;

  heart2 = createSprite(80, 30, 20, 20);
  heart2.addImage(heartImg);
  heart2.scale = 0.3;

  heart3 = createSprite(130, 30, 20, 20);
  heart3.addImage(heartImg);
  heart3.scale = 0.3;
}
function draw() {
  background("lightblue");  
  if (gameState === SERVE) {
    dog.visible = false;
    bee1.visible = false;
    bee2.visible = false;
    bee3.visible = false;
    bee4.visible = false;
    gameOver.visible = false;
    heart1.visible = false;
    heart2.visible = false;
    heart3.visible = false;
    textSize(30);
    fill("darkblue");
    stroke("darkblue")
    text("Help Daisy Find Her Way Back Home", 250, 50);

    if(mousePressedOver(play)){
      gameState = PLAY;
    }
  }
    if (gameState === PLAY){
      play.visible = false;
      dog.visible = true;
      bee1.visible = true;
      bee2.visible = true;
      bee3.visible = true;
      bee4.visible = true;
      heart1.visible = true;
      heart2.visible = true;
      heart3.visible = true;

      dog.setCollider("rectangle",0,0,dog.width-250,dog.height);
      dog.debug = false;
      textSize(25);
      fill("darkblue");
      stroke("darkblue")
      text("You've got three lives! Avoid the beehives!", 250, 40);

  var wall1 = createSprite(600, 550, 750, 10);
  wall1.shapeColor = "brown";
  var wall2 = createSprite(75, 550, 100, 10);
  wall2.shapeColor = "brown";
  var wall3 = createSprite(30, 300, 10, 500);
  wall3.shapeColor = "brown";
  var wall4 = createSprite(970, 370, 10, 355);
  wall4.shapeColor = "brown";
  var wall5 = createSprite(970, 75, 10, 50);
  wall5.shapeColor = "brown";
  var wall6 = createSprite(500, 55, 950, 10);
  wall6.shapeColor = "brown";
  var wall7 = createSprite(100, 450, 150, 7);
  wall7.shapeColor = "brown";
  var wall8 = createSprite(140, 415, 7, 65);
  wall8.shapeColor = "brown";
  var wall9 = createSprite(150, 385, 75, 7);
  wall9.shapeColor = "brown";
  var wall10 = createSprite(110, 335, 7, 100);
  wall10.shapeColor = "brown";
  var wall11 = createSprite(300, 500, 7, 100);
  wall11.shapeColor = "brown";
  var wall12 = createSprite(350, 500, 100, 7);
  wall12.shapeColor = "brown";
  var wall13 = createSprite(500, 350, 100, 7);
  wall13.shapeColor = "brown";
  var wall14 = createSprite(100, 250, 150, 7);
  wall14.shapeColor = "brown";
  var wall15 = createSprite(100, 190, 7, 125);
  wall15.shapeColor = "brown";
  var wall16 = createSprite(140, 200, 80, 7);
  wall16.shapeColor = "brown";
  var wall17 = createSprite(175, 160, 7, 75);
  wall17.shapeColor = "brown";
  var wall18 = createSprite(500, 285, 7, 125);
  wall18.shapeColor = "brown";
  var wall19 = createSprite(535, 275, 80, 7);
  wall19.shapeColor = "brown";
  var wall20 = createSprite(565, 220, 7, 120);
  wall20.shapeColor = "brown";
  var wall21 = createSprite(535, 160, 70, 7);
  wall21.shapeColor = "brown";
  var wall22 = createSprite(750, 100, 7, 100);
  wall22.shapeColor = "brown";
  var wall23 = createSprite(740, 100, 25, 7);
  wall23.shapeColor = "brown";
  var wall24 = createSprite(720, 310, 7, 175);
  wall24.shapeColor = "brown";
  var wall25 = createSprite(700, 400, 48, 7);
  wall25.shapeColor = "brown";
  var wall26 = createSprite(870, 400, 7, 150);
  wall26.shapeColor = "brown";
  var wall27 = createSprite(850, 325, 40, 7);
  wall27.shapeColor = "brown";
  var wall28 = createSprite(833, 250, 7, 150);
  wall28.shapeColor = "brown";
  var wall29 = createSprite(920, 450, 100, 7);
  wall29.shapeColor = "brown";
  var wall30 = createSprite(230, 200, 7, 150);
  wall30.shapeColor = "brown";
  var wall31 = createSprite(280, 200, 100, 7);
  wall31.shapeColor = "brown";
  var wall32 = createSprite(310, 180, 7, 40);
  wall32.shapeColor = "brown";
  var wall33 = createSprite(330, 160, 100, 7);
  wall33.shapeColor = "brown";
  var wall34 = createSprite(300, 350, 7, 100);
  wall34.shapeColor = "brown";
  var wall35 = createSprite(347, 400, 100, 7);
  wall35.shapeColor = "brown";

  edges = createEdgeSprites();
  dog.bounceOff(edges);
  dog.bounceOff(wall1);
  dog.bounceOff(wall2);
  dog.bounceOff(wall3);
  dog.bounceOff(wall4);
  dog.bounceOff(wall5); 
  dog.bounceOff(wall6);
  dog.bounceOff(wall7);
  dog.bounceOff(wall8);
  dog.bounceOff(wall9);
  dog.bounceOff(wall10);
  dog.bounceOff(wall11);
  dog.bounceOff(wall12);
  dog.bounceOff(wall13);
  dog.bounceOff(wall14);
  dog.bounceOff(wall15);
  dog.bounceOff(wall16);
  dog.bounceOff(wall17);
  dog.bounceOff(wall18);
  dog.bounceOff(wall19);
  dog.bounceOff(wall20);
  dog.bounceOff(wall21);
  dog.bounceOff(wall22);
  dog.bounceOff(wall23);
  dog.bounceOff(wall24);
  dog.bounceOff(wall25);
  dog.bounceOff(wall26);
  dog.bounceOff(wall27);
  dog.bounceOff(wall28);
  dog.bounceOff(wall29);
  dog.bounceOff(wall30);
  dog.bounceOff(wall31);
  dog.bounceOff(wall32);
  dog.bounceOff(wall33);
  dog.bounceOff(wall34);
  dog.bounceOff(wall35);

  if (bee1.x <= 160){
    bee1.changeAnimation("movingRight", bee_right);
    bee1.velocityX = 7;
    bee1.velocityY = 0;
    bee1.visible = false;
    
  }
  if (bee1.x >= 830){
    bee1.changeAnimation("movingLeft", bee_left);
    bee1.visible = true;
    bee1.velocityX = -7;
    bee1.velocityY = 0;
  }
  if (bee2.y >= 420){
    bee2.changeAnimation("movingRight", bee_right);
    bee2.velocityX = 0;
    bee2.velocityY = -7;
  }
  if (bee2.y <= 100){
    bee2.changeAnimation("movingLeft", bee_left);
    bee2.velocityX = 0;
    bee2.velocityY = 7;
  }
  if (bee3.x >= 700){
    bee3.changeAnimation("movingLeft", bee_left);
    bee3.velocityX = -7;
    bee3.velocityY = 0;
  }
  if (bee3.x <= 80){
    bee3.changeAnimation("movingRight", bee_right);
    bee3.velocityX = 7;
    bee3.velocityY = 0;
  }
  if (bee4.x >= 920){
    bee4.changeAnimation("movingLeft", bee_left);
    bee4.velocityX = -7;
    bee4.velocityY = 0;
  }
  if (bee4.x <= 350){
    bee4.changeAnimation("movingRight", bee_right);
    bee4.velocityX = 7;
    bee4.velocityY = 0;
  }
      if (keyDown(UP_ARROW)) {
        dog.velocityX = 0;
        dog.velocityY = -5;
      } else {
        dog.velocityX = 0;
        dog.velocityY = 0;
      }
      
      if (keyDown(DOWN_ARROW)) {
        dog.velocityX = 0;
        dog.velocityY = 5;
      }

      if (keyDown(RIGHT_ARROW)) {
        dog.changeAnimation("movingRight",dog_right);
        dog.velocityX = 5;
        dog.velocityY = 0;
      }
      
      if (keyDown(LEFT_ARROW)) {
        dog.changeAnimation("movingLeft",dog_left);
        dog.velocityX = -5;
        dog.velocityY = 0; 
      }
    }
    heartLives();
    beeCollide();
    //if(mousePressedOver(restart)) {
    //  reset();
    //}
    drawSprites();
}
function heartLives() {
  if (lives === 2) {
    heart3.visible = false;
  }
  if (lives === 1) {
    heart2.visible = false;
  }
  //if (lives === 0) {
  //}
}
function beeCollide(){
  if (bee1.isTouching(dog)) {
    lives = lives - 1;
}
if (bee2.isTouching(dog)) {
  lives = lives - 1;
}
if (bee3.isTouching(dog)) {
  lives = lives - 1;
}
if (bee4.isTouching(dog)) {
  lives = lives - 1;
}
}
/*function reset(){
  gameState = PLAY;
}*/