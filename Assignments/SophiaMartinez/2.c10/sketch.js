//where should I go for boba
let boba = [{
  name: "7leaves",
  sugar: "medium"
}, {
  name: "tenRen",
  sugar: "low"
}, {
  name: "85c",
  sugar: "high"
}, {
  name: "happyLemon",
  sugar: "high"
}, {
  name: "truedan",
  sugar: "low"
}, {
  name: "TPtea",
  sugar: "medium"
}];

let randomIndex;
let animating = false;
let shops = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i <= 6; i++) {
    shops[i] = loadImage(`assets/shops_${0}.png`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  textFont('Arial')
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  imageMode(CENTER);
  frameRate(8);

  text("Boba Decision Maker", width/2, height/2); //home screen
  console.log(boba);

  button = createButton("click to spin");
  button.mousePressed(buttonPressed);
}

function draw() {

  if (animating == true) {
    clear();
    image(shops[imageCounter], width/2, height/2);

    if (imageCounter < shops.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

  function randomizer() {
    animating = false
    if (boba[0]) {
      // this displays random name and splices it out of array
      background(random(200, 255));
      randomIndex = int(random(boba.length));
      text(boba[randomIndex].name + "'s sugar level is " + boba[randomIndex].sugar, width/2, height/5);
      image(shops[randomIndex], width/2, height/2.3);
      boba.splice(randomIndex, 1);
    } else {
      background(random(200, 255));
      text("No boba for you today >:(", 50, 50);
    }
  }

  function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2000);


  }
