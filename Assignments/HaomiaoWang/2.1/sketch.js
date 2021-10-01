//I love Cats!
let cats = [{name:"Melinda", color:"yellow"},
  {name:"Caroline",color:"blue"},
  {name:"Momo", color:"pink"}];

let randomIndex;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  // cats[0]="Melinda Tang";
  // cats[1]="Caroline Huang";
  // cats[2]="Momo Wang";
  
  
}

function draw() {
  background(20);
  fill('#E9967A');
  ellipse(100,100,40);
}

function mousePressed(){
  background(random('#00BFFF','#1E90FF'));
  randomIndex = int(random(cats.length));
  //console.log(cats[randomIndex].name);
  text(cats[randomIndex].name,60,60);
  cats.splice(randomIndex,1);
  
}