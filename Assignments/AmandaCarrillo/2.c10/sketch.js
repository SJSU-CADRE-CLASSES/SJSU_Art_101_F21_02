//Haloween Movie Generator

let movies = [
  "Scream (1996)",
  "The Shining (1980)",
  "The Addams Family (1991)",
  "The Omen (1976)",
  "Hocus Pocus (1993)",
  "Rosemary's Baby (1968)",
  "A Nightmare on Elm Street (1984)",
  "The Haunted Mansion (2003)",
  "Friday the 13th (1980)",
  "Halloween (1978)",
  "Halloweentown (1998)",
  "Labryinth (1986)",
  "Child's Play (1988)",
  "Beetlejuice (1988)",
  "Get Out (2017)",
  "Edward Scissorhands (1990)",
  "Ghostbusters (1984)",
  "Carrie (1976)",
  "The Exorcist (1973)",
  "Casper (1995)",
  "Us (2019)",
  "The Blair Witch Project (1999)",
  "The Craft (1996)",
  "Paranormal Activity (2007)",
  "Practical Magic (1998)",
  "The Nightmare Before Christmas (1993)",
  "The Witches of Eastwick (1987)",
  "Death Becomes Her (1992)",
  "Sleepy Hollow (1999)",
  "Bram Stoker's Dracula (1992)",
  "The Silence of the Lambs (1991)",
];

let randomIndex;
var slider;
let title;
var song;

function preload() {
  song = loadSound ("Spooky Scary Skeletons.mp3")
  title = loadImage("HalloweenMovieGen.jpg");
}

function setup() {
  imageMode(CENTER);
  textAlign(CENTER);
  createCanvas(600, 600);
  background(200);
  textSize(25);
  imageMode(CENTER);
  background(random(252), random(76), random(4));
  fill(255, 255, 255);
  text("Halloween Movie Generator", width / 2, height / 2);
  text("Click button below to begin.", width / 2, height / 3);
  image(title, 300, 300);
  createButton("Click to Generate");
  song.play();
  song.setVolume(0.5);
}

function draw() {}

function mousePressed() {
  background(random(252), random(76), random(4));
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 255);
  if (movies[0]) {
    randomIndex = int(random(movies.length));
    text(movies[randomIndex], width / 2, height / 2);
    movies.splice(randomIndex, 1);
  } else {
    textSize(50);
    fill(0)
    background(215, 107, 0);
    text("HAPPY HALLOWEEN!", width / 2, height / 2);
  }
}
