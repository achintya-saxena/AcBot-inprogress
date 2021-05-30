var canvas, backgroundImage;
var form, player, game;
var startBg;
var morningBg;
var noonBg;
var eveningBg;
var radio;



function preload(){
startBg=loadImage("startBg.jpg");
morningBg=loadImage("bg.png");
noonBg=loadImage("bg2.png");
eveningBg=loadImage("bg3.png");
}

function setup(){
  canvas = createCanvas(window.innerWidth ,window.innerHeight);
  database = firebase.database();
 
  
  
  game = new Game();
  
  game.start();

}
function draw(){
  

}


