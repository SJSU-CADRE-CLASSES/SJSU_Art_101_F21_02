//I love Cats!
let catsName = [
  {name:"Melinda"},
  {name:"Caroline"},
  {name:"Momo"},
  {name:"Milk"},
  {name:"Orange"},
  {name:"Candy"},
  {name:"Topping"}
];

let randomIndex;
//let counter = 0;
//let animating = true;
let animating = false;
let imageCounter=0;
let cats = [];
let button;

//let fx;
//let preload;

function preload(){
  //sound
  soundFormats("mp3");
  fx=loadSound("assets/catsmomo.mp3");
  for (let i=0; i<=6; i++){
    //cats[i]=loadImage("assets/cats-"+catsName[i]+".JPG");
    // cats[i]=
    // {
    //   image:img,
    //   name:catsName[i].name
    cats[i]=loadImage(`assets/cats-${i}.JPG`);
    }


  myFont=loadFont('assets/HyFTwinkling-2.ttf');
}


function setup() {
  createCanvas(1000,1000);
  background('#FFF0F5');
  textFont(myFont);

  fill('#778899');
  textSize(40);
  imageMode(CENTER);
  textAlign(CENTER);
  frameRate(5);

  text("click to randomize and get a cat's love!",500,500);

  button = createButton("click to enjoy cats!")
  button.size(300,50)
  button.position(width/2,height/2);

  button.mousePressed(buttonPressed);
  //setInterval(changeBackground, 1000);
  //setTimeout(changeBackground, 1000);
  //console.log(cats);
}

function draw() {
  // background(20);
  // fill('#E9967A');
  // ellipse(100,100,40);

  if(animating == true){
    //ellipse(random(width), random(high), random(50,100));
    clear();

    //image(cats[imageCounter],width/2,height/2);

    if(imageCounter<cats.length-1){
      imageCounter++;
      console.log(imageCounter);
    }
    else{
      imageCounter=0;
    }
    //cats=cats[imageCounter]
    image(cats[imageCounter], width/5, height/5);

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

  if (catsName[0]){
    background(random('#00BFFF','#1E90FF'));

    //clear();
    randomIndex = int(random(catsName.length));
    image(cats[randomIndex], width/5, height/5);
    fill(random(255), random(255), random(255));
    //console.log(cats[randomIndex].name);
    text("Name: " + catsName[randomIndex].name, 500, 600);
    text(catsName[randomIndex].name+"is the cat chooses you!", 500, 650);


    //image(cats.image,width/2,height/2);
    //catsName=cats.name.replaceAll("-"," ");
   //  text(
   //   `${catsName} is the cat chooses you!`,
   //   width / 2,
   //   height / 2
   // );
    //text(`${cats[randomIndex].name} is the cat chooses you!
    //${cats[randomIndex].color}`,width/2,height-100);
    // text(cats[randomIndex].name + "'s favorite color is",
    // cats[randomIndex].color,500,600);
    catsName.splice(randomIndex,1);
    cats.splice(randomIndex,1);
  }
  else{
    background('#FFF0F5');
    text("Remember your cat!",500,600);
  }
}
//mousePressed
function buttonPressed(){

  animating=true;
  setTimeout(randomizer,4500);
  fx.play();





}
