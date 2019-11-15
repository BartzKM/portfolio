var xincreasing=true; 
var yincreasing=true;
var num=1;
var<Bacteria> b=new var<Bacteria>();
function setup() {
  createCanvas(800,800);
  background(0);
}
function draw() {
  background(0);
  for (var i=0; i<num; i++) {
    b.add(new Bacteria(((Math.random()*500)+100),((Math.random()*500)+100)));
    b.get(i).show();
    b.get(i).move();
  }
   fill(255);
   textSize(48);
   text("Bacteria Multiplier", 200, 75);
   fill(255,0,0);
   rect(50, 650, 100, 50);
   fill(255);
   textSize(24);
   text("Multiply", 55, 680);
   if (mouseX<150 && mouseX>50 && mouseY<700 && mouseY>650) {
     if (mousePressed) {
         num+=1;
     }
   }
   fill(255,0,0);
   rect(650, 650, 100, 50);
   fill(255);
   textSize(24);
   text("Restart", 655, 680);
   if (mouseX<750 && mouseX>650 && mouseY<700 && mouseY>650) {
     if (mousePressed) {
         num=1;
     }
   }
}
class Bacteria    
 {     
   Bacteria(x, y) {
     this.x=x;
     this.y=y;
   }
   show() {
     fill(255, 0, 0);
     ellipse(this.x, this.y, 15, 15);
   }
   void move() {
     if (this.x>750 || !xincreasing) {
       this.x-=(Math.random()*5);
       xincreasing=false;
     } if (this.x<50 || xincreasing){
       this.x+=(Math.random()*5);
       xincreasing=true;
     }  if (this.y>750 || !yincreasing) {
       this.y-=(Math.random()*5);
       yincreasing=false;
     } if (this.y<50 || yincreasing){
       this.y+=(Math.random()*5);
       yincreasing=true;
     }
   }
 }    