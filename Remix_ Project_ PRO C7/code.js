var abacaxi, abacaxipng;
var berinjela, berinjelapng;
var cebola, cebolapng;
var cenoura, cenourapng;
var laranja,laranjapng;
var tomate,tomatepng;

function preload(){
  abacaxipng = loadImage("abacaxi.png");
  berinjelapng = loadImage("berinjela.png");
  cebolapng = loadImage("cebola.png");
  cenourapng = loadImage("cenoura.png");
  laranjapng = loadImage("laranja.png");
  tomatepng = loadImage ("tomate.png");
  
}

function setup(){
  createCanvas(400, 400);
abacaxi = createSprite();
berinjela = createSprite(30,195,25,25);
cebola = createSprite(30,360,25,25);
cenoura = createSprite(30,35,25,25);
laranja = createSprite(30,120,25,25);
tomate = createSprite(30,275,25,25);
}


function draw() {
  background(86, 47, 26);
  drawSprites();
  
}
