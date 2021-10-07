let music = [{
  artist: "The Cars",
  song: "Just What I Needed"
}, {
  artist: "Dio",
  song: "Rainbow in the Dark"
}, {
  artist: "Queen",
  song: "Killer Queen"
}, {
  artist: "King Crimson",
  song: "Court of the Crimson King"
}, {
  artist: "Whitesnake",
  song: "Fool for Your Loving"
}, {
  artist: "AC/DC",
  song: "Dirty Deeds Done Dirt Cheap"
}, {
  artist: "Elvis Presley",
  song: "Wonder of You"
}];

let randomIndex;
let animation = false;

function preload() {
  myFontOne = loadFont('assets/Poppins-Bold.ttf');
}

// let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(255);
  
  // setTimeout(changeBackground, 5000)
}

function draw() {
  fill(random(255), random(255), random(255));
  if(animation == true) {
    ellipse(random(width), random(height), random(50, 200));
}
}

function changeBackground() {
//   if (counter <= 5){
//     couner++;
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 5000)
// } else {
// }
}

function randomizer(){
  animation = false;
  if (music[0]){
  background(255);
  randomIndex = int(random(music.length));
  fill('#000000');
  //textFont(myFontOne);
  textSize(40);
  textAlign(CENTER);
  text(`${music[randomIndex].artist}
  ${music[randomIndex].song}`, width/2, 200)
  music.splice(randomIndex, 1);
} else {
  background(255);
  fill('#000000');
  textSize(40);
  textAlign(CENTER);
  text('Explore New Lands!', width/2, 200)
}
}

function mousePressed() {
  animation = true;
  setTimeout(randomizer, 2000);
}