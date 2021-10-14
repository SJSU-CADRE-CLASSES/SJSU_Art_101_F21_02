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

function preload() {
  for (let i = 0; i <= 6; i++) {
    shops[i] = loadImage(`assets/shops_${1}.png`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  frameRate(8);

  text("Spin the roulette", 50, 50); //home screen
  console.log(shops);
}

function draw() {

  if (animating == true) {
    clear();
    image(shops[imageCounter], width / 2, height / 2);

    if (imageCounter < shops.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }

  function randomizer() {
    animating = false
    if (boba[0]) {
      // this displays random name and splices it out of array
      // background(random(200, 255));
      clear();
      randomIndex = int(random(boba.length));
      text(boba[randomIndex].name + "'s sugar level is " + boba[randomIndex].sugar, width/2, height - 25);
      image(random[shops], width / 2, height / 2);
      boba.splice(randomIndex, 1);
    } else {
      background(random(200, 255));
      text("No boba for you today >:(", 50, 50);
    }
  }

  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);


  }
