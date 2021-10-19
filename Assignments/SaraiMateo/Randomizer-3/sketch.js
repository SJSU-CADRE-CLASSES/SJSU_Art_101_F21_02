//Flowers

let flowers = [{
  name: "rose",
  color: "red"
}, {
  name: "lily",
  color: "pink"
}, {
  name: "orchid",
  color: "purple"
}, {
  name: "sunflower",
  color: "yellow"
}, {
  name: "daisy",
  color: "white"
}, {
  name: "baby's breath",
  color: "blue"
}];

let randomIndex;
let animating = false;
let picture = [];
let imageCounter = 1;
let button;

function preload() {

  for (let i = 0; i <= 5; i++) {
    picture[i + 1] = loadImage(`assets/picture_${i+1}.jpg`);
  }
}

function setup() {
  createCanvas(910, 910);
  background(200);
  textSize(38);
  imageMode(CENTER);
  frameRate(8);

  text("press button below", 50, 50);
  console.log(picture);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    clear();
    image(picture[imageCounter], width / 2, height / 2);

      if (imageCounter < picture.length - 1) {
      imageCounter++;
      } else {
        imageCounter = 1;
      }
    }
  }

  function randomizer() {
    animating = false;
    if (flowers[0]) {
      background(random(200, 255));
      randomIndex = int(random(flowers.length));
      text(`${flowers[randomIndex].name} petals
are ${flowers[randomIndex].color}`, 50, 50);
image(random(picture), width / 2, height / 2);
      flowers.splice(randomIndex, 1);
    } else {
      background(random(200, 255));
      text("nothing left!", 50, 50);
    }
  }

  function buttonPressed() {
    animating = true
    setTimeout(randomizer, 2000);
  }
