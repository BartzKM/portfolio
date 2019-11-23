let die;
var wins=0;
var loses=0;

function setup() {
	var canvas = createCanvas(600,600);
    canvas.parent('sketch-div');
	noLoop();
}

function draw() {
	background(0);
    fill(255);
    textSize(45);
    text("Luck of the Roll",130,60);
    var t=0;
	for (var i = 50; i < 500; i += 100) {
		for (var j = 125; j < 400; j += 100) {
			die = new Dice(i, j);
			die.show();
			t+=die.roll();
		}
	}
    fill(255);
    textSize(35);
    text("Goal: total>40 or total<65", 100,100);
    text("Total: "+t, 25, 500);
    if (t>65 || t<40) {
      text("You win!", 25, 550);
      wins++;
    } else {
      text("You lose!", 25, 550);
      loses++;
    }
    text("Number of wins: "+wins, 225, 500);
    text("Number of loses: "+loses, 225, 550);
}

function mousePressed() {
	redraw();
}

class Dice {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	};
	roll() {
		var num = (Math.floor(Math.random() * 6) + 1);
        var total=0;
		console.log(num);
		noStroke();

		if (num == 1) {
			fill(0);
			ellipse(this.x + 50, this.y + 50, 20, 20);
            total++;
		} else if (num == 2) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
            total+=2;
		} else if (num == 3) {
			fill(0);
			ellipse(this.x + 20, this.y + 20, 20, 20);
			ellipse(this.x + 50, this.y + 50, 20, 20);
			ellipse(this.x + 80, this.y + 80, 20, 20);
            total+=3;
		} else if (num == 4) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
            total+=4;
		} else if (num == 5) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
			ellipse(this.x + 50, this.y + 50, 20, 20);
            total+=5;
		} else if (num == 6) {
			fill(0);
			ellipse(this.x + 25, this.y + 25, 20, 20);
			ellipse(this.x + 25, this.y + 50, 20, 20);
			ellipse(this.x + 25, this.y + 75, 20, 20);
			ellipse(this.x + 75, this.y + 25, 20, 20);
			ellipse(this.x + 75, this.y + 50, 20, 20);
			ellipse(this.x + 75, this.y + 75, 20, 20);
            total+=6;
		}
        return total;
	};

	show() {
		fill(255);
		rect(this.x, this.y, 100, 100, 20);
	};
}