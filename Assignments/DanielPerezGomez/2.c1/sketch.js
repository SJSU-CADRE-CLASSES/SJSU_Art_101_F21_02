let music = [{
  artist: "The Cars",
}, {
  artist: "Dio",
}, {
  artist: "Queen",
}, {
  artist: "King Crimson",
}, {
  artist: "Whitesnake",
}, {
  artist: "AC/DC",
}, {
  artist: "Elvis Presley",
}];

let randomIndex;
let animation = false;
let tarrot = [];
let imageCounter = 0;

function preload() {
  myFontOne = loadFont('assets/Poppins-Bold.ttf');
  for (let i = 0; i <= 6; i++){
  tarrot[i] = loadImage(`assets/tarrot_${i}.jpg`);
}
}

function setup() {
  createCanvas(600, 600);
  background('#000000');
  frameRate(8);
  
  imageMode(CENTER);
  button = createButton('Randomize');
  // button = select('#randomButton');
  button.mousePressed(buttonPressed);
  button.class('randomizerButton');
  // button.style('padding', '20px');
  // button.style('background-color', '#78DEC7');
}

function draw() {
  if(animation == true) {
  // clear();
  image(tarrot[imageCounter], width/2, height/2);
  if (imageCounter < tarrot.length - 1){
  imageCounter++;
} else {
  imageCounter = 0;
}
}
  fill('#ffffff');
  textFont(myFontOne);
  textSize(40);
  textAlign(CENTER);
  text('Let Fate Decide Your Music', width/2, 50);
}

function randomizer(){
  animation = false;
  if (music[0]){
  // clear();
  randomIndex = int(random(music.length));
  image(random(tarrot), width/2, height/2);
  fill('#ffffff');
  textFont(myFontOne);
  textSize(40);
  textAlign(CENTER);
  text(music[randomIndex].artist, width/2, height - 25);
  music.splice(randomIndex, 1);
} else {
  text('Explore New Lands!', width/2, height - 25);
}
}

function buttonPressed() {
  animation = true;
  setTimeout(randomizer, 2000);
}