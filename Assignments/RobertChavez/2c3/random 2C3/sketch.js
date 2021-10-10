let dogs = [{name: "max", color:"white"}, {name: "jordan", color: "brown"},{name:"slinky", color:"green"}, {name: "buddha", color:"blue" }]

let randomIndex;
let randompics = [];
let imageCounter = 0;
let animating = false;
let button;
function preload(){
// random[0] = loadImage("assets/random_0.JPEG");
// random[1] = loadImage("assets/random_1.JPEG");
// random[2] = loadImage("assets/random_2.JPEG");
// random[3] = loadImage("assets/random_3.JPEG");
  for (let i = 0; i <=2; i++){

randompics[i] = loadImage(`assets/random_${i}.jpg`)

  }
}



function setup() {
  createCanvas(600, 600);
  background(225);
  textSize(32);
  imageMode(CENTER);
  frameRate(2);

text("click to randomize",50,50);

button = createButton("click to randomize");
button.mousePressed(buttonPressed);
}

function draw() {

if (animating == true){
  clear();
  // ellipse(random(width), random (height), random(50,200));
  image(randompics[imageCounter], width/2, height/2);

  if (imageCounter < randompics.length-1)
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter = 0;
}

}

function randomizer (){
  animating = false;
  if (dogs[0]){

  // background(random(200,255));
  clear();
  randomIndex = int(random(dogs.length))
  text(`${dogs[randomIndex].name}'s favorite color inspect;
  ${dogs[randomIndex].color}`,50, 50);
  image(random(randompics), width/2, height/2);
  // text(dogs[randomIndex].name + "'s favorite color is" +
  // dogs[randomIndex].color,50, 50);
  dogs.splice(randomIndex, 1);
  }
  else {
    background(random(200,255));
    text("nothing left!",50,50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer,2000);


}
