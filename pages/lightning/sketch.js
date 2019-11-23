var startX=400;
var startY=230;
var endX=0;
var endY=300;
var angle=0;
var hammer;
function setup() {
    var canvas = createCanvas(600,600);
    canvas.parent('sketch-div');
    strokeWeight(5);
    background(0);
    hammer = loadImage("data/thorHammer.png");
    
}
function draw() {
  lightning();
  hammerPicture();
}

 function lightning() {
  fill(0);
  rect(0,0,width,height);
  stroke((Math.random()*51)+200, (int)(Math.random()*51)+200, 0);
  if (second()%4==0) {
  while(endY<height) {
    endX=startX+(Math.random()*10);
    endY=startY+((Math.random()*19)-9);
    line(startY, startX, endY, endX);
    startX=endX;
    startY=endY;
  }
  startX=400;
  startY=230;
  endX=200;
  endY=300;
} else {
  startX=400;
  startY=230;
  endX=0;
  endY=300;
}
 }

 function hammerPicture() {
  if (second()%4==0) {
    angle=0;
  }
  angle+=.035;
  var c = cos(angle);
  translate(width/2-100, height/2-100);
  rotate(c);
  image(hammer,0,0);
 }

