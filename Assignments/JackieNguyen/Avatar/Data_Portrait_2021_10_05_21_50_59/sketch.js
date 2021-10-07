function setup() {
  createCanvas(400, 400);
  background (220, 250, 200);

//sky
noStroke();
colorMode(HSB, 100);
c = color(50, 55, 100);
fill(c);
rect(00, 00, 400, 200);


//grass shading
c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(50, 210, 15, 15); // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(180, 210, 15, 15); // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(300, 210, 15, 15); // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(70, 290, 15, 15); // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(180, 350, 15, 15); // Draw rectangle

c = color('hsla(160, 100%, 50%, 0.5)');
fill(c);
rect(330, 290, 15, 15); // Draw rectangle


//grass blades
fill('green');
rect(70, 200, 5, 35);
rect(280, 200, 5, 35);
rect(20, 290, 5, 35);
rect(380, 290, 5, 35);
rect(200, 290, 5, 35);
rect(280, 350, 5, 35);
rect(70, 350, 5, 35);


}

function draw(){
// upper left flower petals
fill(random(255), random(255), random(255));
ellipse(56, 250, 10, 30);
ellipse(56, 250, 30, 10);

  
// upper right flower petals
fill(random(255), random(255), random(255));
ellipse(344, 250, 10, 30);
ellipse(344, 250, 30, 10);

//upper middle left flower petals
fill(random(255), random(255), random(255));
ellipse(150, 250, 10, 30);
ellipse(150, 250, 30, 10);

//upper middle right flower petals
fill(random(255), random(255), random(255));
ellipse(225, 250, 10, 30);
ellipse(225, 250, 30, 10);

//lower middle left flower
fill(random(255), random(255), random(255));
ellipse(100, 325, 10, 30);
ellipse(100, 325, 30, 10);

//lower middle right  flower
fill(random(255), random(255), random(255));
ellipse(300, 325, 10, 30);
ellipse(300, 325, 30, 10);

//flower centers
fill('yellow');
ellipse(56, 250, 10, 10);
ellipse(344, 250, 10, 10);
ellipse(150, 250, 10, 10);
ellipse(225, 250, 10, 10);
ellipse(100, 325, 10, 10);
ellipse(300, 325, 10, 10);

//sun
fill('yellow');
ellipse(200, 100, 100, 100);

//clouds
translate(50, 0);
push();
fill('white');
rect(20, 20, 80, 40);
rect(30, 30, 120, 40);
rect(260, 100, 80, 40);
rect(300, 110, 80, 40);
rect(320, 80, 80, 40);
pop();

}

