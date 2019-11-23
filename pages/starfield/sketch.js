var part;
var angle;
var rd=0;
var r=255;
var g=255;
var b=255;
var i=1;
function setup(){
  var canvas = createCanvas(600,600);
  canvas.parent('sketch-div');
  background(0);
  part=new JumboParticle();
}
function draw(){
  part.move();
}

class JumboParticle
{
  constructor(){
    angle=random(5);
  }
  move() {
    var x=rd*cos(angle);
    var y=rd*sin(angle);
    noStroke();
    fill(r, g, b);
    if (i%5==1) {
      background(0);
      ellipse(x+width/2, y+height/2, 40, 40);
    } else {
    ellipse(x+width/2, y+height/2, 20, 20);
    }
    angle+=.5;
    rd+=.5;
    if (rd>425) {
      rd=0;
      angle=random(5);
      r=(Math.random()*155)+100;
      g=(Math.random()*155)+100;
      b=(Math.random()*155)+100;
      i++;
    } 
    if (i%5==0) {
      background(0);
      rd=0;
      angle=random(5);
      i++;
    }
  }
}