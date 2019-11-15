var x=0;
var y=0;
var xincreasing=true; 
var yincreasing=true;
var num=1;
var b=new Array();
function setup() {
  createCanvas(600,600);
  background(0);
}
function draw() {
  background(0);
  for (var i=0; i<num; i++) {
    b[i]=new Bacteria(((Math.random()*400)+100),((Math.random()*400)+100));
    b[i].show();
    b[i].move();
  }
   fill(255);
   textSize(48);
   text("Bacteria Multiplier", 100, 75);
   fill(255,0,0);
   rect(50, 450, 100, 50);
   fill(255);
   textSize(24);
   text("Multiply", 55, 480);
   fill(255,0,0);
   rect(450, 450, 100, 50);
   fill(255);
   textSize(24);
   text("Restart", 455, 480);
}
function mousePressed() {
    if (mouseX<550 && mouseX>450 && mouseY<500 && mouseY>450) {
        num=1;
   }
    if (mouseX<150 && mouseX>50 && mouseY<500 && mouseY>450) {
         num+=1;
     }
}
class Bacteria    
 {     
   constructor(x, y) {
     this.x=x;
     this.y=y;
   }
   show() {
     fill(255, 0, 0);
     ellipse(this.x, this.y, 15, 15);
   }
   move() {
     if (this.x>550 || !xincreasing) {
       this.x-=(Math.random()*5);
       xincreasing=false;
     } if (this.x<50 || xincreasing){
       this.x+=(Math.random()*5);
       xincreasing=true;
     }  if (this.y>550 || !yincreasing) {
       this.y-=(Math.random()*5);
       yincreasing=false;
     } if (this.y<50 || yincreasing){
       this.y+=(Math.random()*5);
       yincreasing=true;
     }
   }
 }    