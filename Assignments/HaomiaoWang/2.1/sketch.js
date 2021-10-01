//I love Cats!
let cats = [{name:"Melinda", color:"yellow"},
  {name:"Caroline",color:"blue"},
  {name:"Momo", color:"pink"}];

let randomIndex;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FFF0F5');
  textSize(45);

  text("click to randomize and see my cats!",500,600);

  
  
}

function draw() {
  // background(20);
  // fill('#E9967A');
  // ellipse(100,100,40);
}

function mousePressed(){
  if (cats[0]){
    background(random('#00BFFF','#1E90FF'));
    randomIndex = int(random(cats.length));
  //console.log(cats[randomIndex].name);
    text(cats[randomIndex].name,500,600);
    cats.splice(randomIndex,1);
  }
  else{
    background(random('#00BFFF','#1E90FF'));
    text("That's all and thank you!",500,600);
  }
  
}