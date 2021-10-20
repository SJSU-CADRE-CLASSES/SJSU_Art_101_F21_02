//Flowersfacts

let flowerfacts = [{
  name: "Perennial flowers are flowers that stay dormant in winter and grow back in spring."
}, {
  name: "Perennial flowers can live for about 20-30 years if taken care of properly."
}, {
  name: "Annual flowers live 1 life cycle, but leave seeds which can prout more flowers."
}, {
  name: "Annual flowers bloom for a longer time during the summer than perennial flowers."
}, {
  name: "I.e. of perennial flowers: roses, carnations, tulips, and chrysanthemums."
}, {
  name: "I.e. of annual flowers: marigolds, pansies, petunias, snapdragons, and sunflowers."
}, {
  name: "Biennial flowers require two growing seasons to complete 1 life cycle."
}, {
  name: "I.e. of biennial flowers: black eyed susans, dusty millers, and evening primroses."
}, {
  name: "Impatiens are the most popular type of annual flowers b/c of their bright colors."
}];

let animating = false;
let randomIndex;
let button;
let Flor = [];
let imageCounter = 0

function preload() {

  for (let i = 0; i <= 9; i++) {
    Flor[i] = loadImage(`assets/Flor${i}.jpg`);
  }
}

function setup() {
  createCanvas(600, 500);
  background(144, 238, 144);
  textSize(15);
  textFont('Georgia');
  textAlign(LEFT);
  imageMode(CENTER);
  frameRate(8);

  text("Press the Button Below!", 150, 150);
  button = createButton("click to learn");
  button.mousePressed(buttonPressed);

  console.log(Flor);

}

function draw() {

  if (animating == true) {
    //  clear();
    //  image(Flor[imageCounter], width / 2, height / 2);

    //  if (imageCounter < Flor.length - 1) {
    //  imageCounter++;
    //  } else {
    //    imageCounter = 0;
    //  }
    stroke(250);
    strokeWeight(.5);
    fill(253,253,150,115);
    ellipse(random(width), random(height), random(100, 400));
    ellipse(random(width), random(height), random(125, 175));

    fill(255,179,71,95)
    point(random(width), random(height), random(60, 90));
    ellipse(random(width), random(height), random(150, 350));

    fill(255,182,193,75)
    point(random(width), random(height), random(7, 10));
    point(random(width), random(height), random(20, 50));
  }
}


function randomizer() {
  fill(10)
  animating = false;
  if (flowerfacts[0]) {
    background(144, 238, 144);
    //clear();
    randomIndex = int(random(flowerfacts.length));
    textFont('Georgia');
    text(flowerfacts[randomIndex].name, 50, 50);
    image(random(Flor), width / 2, height / 2);

    flowerfacts.splice(randomIndex, 1);
  } else {
    background(144, 238, 144);
    fill(10)
    textFont('Georgia');
    text("Ta-da, the end, until next time!", 150, 150)
  }
}


function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 3500);


}
