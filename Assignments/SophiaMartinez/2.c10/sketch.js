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
let imageCounter = 0;
let animating = false;
let shops = [];


function preload() {
  for (let i = 0; i <= 5; i++) {
    shops[i] = loadImage(`assets/shops_${5}.png`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(24);
  textFont('Arial')
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
  frameRate(12);


  text("Boba Decision Maker", width / 2, height / 2);
}

function draw() {

  if (animating == true) {
    noStroke();
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
    animating = false;
    if (boba[0]) {
      // this displays random name and splices it out of array
      background(random(255),random(255),random(255));
      randomIndex = int(random(boba.length));
      console.log(boba[randomIndex].starter);
      noStroke();
      text(boba[randomIndex].name + "'s sugar level is " + boba[randomIndex].sugar, 250, 450);
      // image(random(shops), width / 2, height / 2.3);
      boba.splice(randomIndex, 1);
      console.log(boba);
    } else {

      background(random(255),random(255),random(255));
      text("No boba for you today >:(", width / 2, height / 2);
    }
  }

  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2000);

}
