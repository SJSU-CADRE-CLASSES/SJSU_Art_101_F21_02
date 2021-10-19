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
let shops = [];
let imageCounter = 0;
let animating = false;
let buttonPressed;


function preload(){
  for (let i = 0; i <= 5; i++) {
    shops[i] = loadImage(`assets/shops_${i}.png`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(181,156,127);
  textSize(24);
  textFont('Arial')
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);

  text("Boba Decision Maker", width / 2, height / 2);
  fill(255);

  button = createButton("click to spin");
  button.mousePressed(buttonPressed);
  button.style("padding", "15px");
  button.style("background-color", "#f0e0ff")

}

function draw() {
  if (animating == true) {
    clear();
    image(shops[imageCounter], width/2, height/2);

    if (imageCounter < shops.length - 1)
      imageCounter++;
      console.log(imageCounter);
    }else {
      imageCounter = 0;
    }

  }

  function randomizer() {
    animating = false;
    if (boba[0]) {
      // this displays random name and splices it out of array
      randomIndex = int(random(boba.length));
      // background(random(255),random(255),random(255));
      text(boba[randomIndex].name + "'s sugar level is " + boba[randomIndex].sugar, 250, 50);
      image(random(shops), width/2, height/2);
      //console.log(boba[randomIndex].starter);
      noStroke();
      // image(random(shops), width / 2, height / 2.3);
      boba.splice(randomIndex, 1);
      shops.splice(randomIndex, 1);
    } else {
      background(random(225,255,85));
      text("No boba for you today >:(", width / 2, height / 2);
    }
  }

  function mousePressed() {
    animating = true;
    setTimeout(randomizer, 2500);

}
