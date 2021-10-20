//I love Cats!
let cats = [{name:"Melinda", color:"yellow"},
  {name:"Caroline",color:"blue"},
  {name:"Momo", color:"pink"}];

let randomIndex;
//let counter = 0;
let animating = true;
let imageCounter=0;
let cats = [];
let button;

function preload(){
  for (let i=0; i<= 7; i++){
    cats[i]=loadImage("assets/cats"+i+".JPG");
    //cats[i]=loadImage(`assets/cats${i}.JPG`);
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FFF0F5');
  textFont('Courier new');
  textStyle(BOLD);
  fill();
  textSize(45);
  imageMode(CENTER);
  frameRate(5);

  text("click to randomize and see my cats!",500,600);

  button = createButton("click to enjoy cats!")
  button.mousePressed(buttonPressed);
  //setInterval(changeBackground, 1000);
  //setTimeout(changeBackground, 1000);
  console.log(cats);
}

function draw() {
  // background(20);
  // fill('#E9967A');
  // ellipse(100,100,40);

  if(animating == true){
    //ellipse(random(width), random(high), random(50,100));
    clear();

    image(cats[imageCounter],width/2,height/2);
    if(imageCounter<cats.length-1){
      imageCounter++;
      console.log(imageCounter);
    }
    else{
      imageCounter=0;
    }

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
    //background(random('#00BFFF','#1E90FF'));
    clear();
    randomIndex = int(random(cats.length));
  //console.log(cats[randomIndex].name);
    text(`${cats[randomIndex].name}'s favorite color is
    ${cats[randomIndex].color}`,width/2,height-100);
    // text(cats[randomIndex].name + "'s favorite color is",
    // cats[randomIndex].color,500,600);
    image(random(cats),width/2,height/2);

    cats.splice(randomIndex,1);
  }
  else{
    background(random('#00BFFF','#1E90FF'));
    text("That's all and thank you!",500,600);
  }
}
//mousePressed
function buttonPressed(){
  animating = true;
  setTimeout(randomizer,2000);



}
