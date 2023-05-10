
var r1 = 50
var r2 = 150
var a1 = 0
var a2 = 0
function setup() {

createCanvas (400, 400)
angleMode(DEGREES)
background (30)
}

function draw(){
translate(width / 2, height / 2)
stroke(255)
var x1 = r1 * cos(a1)
var y1 = r1 * sin(a1)
point (x1,y1)
a1 += 1;
var x2 = r2 * cos(a2)
var y2 = r2 * sin(a2)
point (x2,y2)
a2 += 1;

}
