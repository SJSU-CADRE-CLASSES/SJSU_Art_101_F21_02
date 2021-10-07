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

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(music.length));
  fill('#000000');
  textSize(40);
  text(music[randomIndex].artist, 200, 200)
  music.splice(randomIndex, 1);
}