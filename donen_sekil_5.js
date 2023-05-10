function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(60);
  noFill();
  stroke(255);
  for (var i = 0; i < 20; i++) {
    var r = map(sin(frameCount/2), -1, 1, 50, 105);
    var g = map(i, 0, 20, 0, 255);
    var b = map(cos(frameCount/2), -1, 1, 250, 0);
    stroke(r, g, b);
    rotate(5);
    beginShape();
    for (var j = 0; j < 360; j += 72) {
      var rad = i * 7;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var z = sin(frameCount + i * 10) * 50;
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}
