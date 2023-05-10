
function setup() {

createCanvas (400, 400, WEBGL);
angleMode(DEGREES);
}

function draw() {
background (30);

for (var i = 0; i < 10; i++) {
beginShape()
for (var j = 0; j < 360; j += 10){
var rad= i * 5
var x = rad * cos(j)
var y = rad * sin(j)
vertex(x, y);
}
endShape(CLOSE);
}
}
