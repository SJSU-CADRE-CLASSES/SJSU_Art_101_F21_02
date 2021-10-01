let circles= {{name:"red"},
{name:"yellow"},
{name:"violet"}};
let randomIndex
function setup() {
  createCanvas(600, 600);
}


function draw() {
  
}

function mousePressed(){
  background(random(200, 220));
  randomIndex=int(random(circles.length));
  text(circles[randomIndex].name, 300,300);
  circles.splice(randomIndex,1);
}
