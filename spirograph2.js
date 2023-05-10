var r1 =50
var r2 = 50
var a1 = 0
var a2 = 0
var prevX
var prevy
function setup() {

createCanvas (400, 400)
angleMode(DEGREES)
background (30)
}
function draw() {
translate(width / 2, height / 2)
stroke(255)
var x1 = r1 * cos(a1) 
var y1 = r1 * sin(a1)
var x2 = x1 + r2 * cos(a2) 
var y2 = y1 + r2 * sin(a2)
line(prevX, prevy, x2, y2)
prevX = x2 
prevy = y2
a1 += 1 
a2 += 5
}
