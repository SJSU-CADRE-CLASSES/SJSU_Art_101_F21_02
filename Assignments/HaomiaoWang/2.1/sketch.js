//I love Cats!
let cats = [{name:"Melinda", color:"yellow"},
  {name:"Caroline",color:"blue"},
  {name:"Momo", color:"pink"}];

let randomIndex;
//let counter = 0;
let animating = true;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FFF0F5');
  textSize(45);

  text("click to randomize and see my cats!",500,600);

  //setInterval(changeBackground, 1000);
  //setTimeout(changeBackground, 1000);
}

function draw() {
  // background(20);
  // fill('#E9967A');
  // ellipse(100,100,40);

  if(animating == true){
    ellipse(random(width), random(high), random(50,100));
  }
}

// fuction changeBackground(){
//   if(counter <= 5){
//     counter++;
//   background(random(255),random(255),random(255),);
//   setTimeout(changeBackground, 1000);
// }
//   else{
//
//   }
// }
function randomizer(){
  animating = false;
  if (cats[0]){
    background(random('#00BFFF','#1E90FF'));
    randomIndex = int(random(cats.length));
  //console.log(cats[randomIndex].name);
    text(`${cats[randomIndex].name}'s favorite color is
    ${cats[randomIndex].color}`,500,600);
    // text(cats[randomIndex].name + "'s favorite color is",
    // cats[randomIndex].color,500,600);
    cats.splice(randomIndex,1);
  }
  else{
    background(random('#00BFFF','#1E90FF'));
    text("That's all and thank you!",500,600);
  }
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer,2000);



}
