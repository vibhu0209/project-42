var h,s,m;
var sAngle,mAngle,hAngle  
var dial;

function setup() {
 createCanvas(800,800);
 angleMode(DEGREES);

}

function draw() {
 background(0,0,0);
 //translation and rotation according to our refrence
 translate(400,400);
 rotate(-90);
 //calculate hour minutes & seconds from system clock
 h = hour();
 m = minute();
 s = second();
 // map converts time to angle.
sAngle = map(s,0,60,0,360);
mAngle = map(m,0,60,0,360);
hAngle = map(h%12,0,12,0,360);
 
 push();
rotate(sAngle); 
stroke( 255, 0, 0)
strokeWeight(5);
line(0,0,125,0);
 pop();

 push();
 rotate(mAngle); 
 stroke(0, 255, 0)
 strokeWeight(8);
 line(0,0,100,0);
  pop();

  push();
 rotate(hAngle); 
 stroke(0, 0, 255)
 strokeWeight(11);
 line(0,0,75,0);
  pop();
  
  noFill();
  strokeWeight(7)
  stroke(0, 0, 255)
  arc(0, 0,400, 400, 0, hAngle)
  stroke(0, 255, 0)
  arc(0, 0,350, 350, 0, mAngle)
  stroke( 255, 0, 0) 
  arc(0, 0,300, 300, 0, sAngle)
 

  drawSprites();


}