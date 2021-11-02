let music = [{
  artist: "Rosemary Fairweather",
  song: "Chemicals"
}, {
  artist: "Melanie Martinez",
  song: "Dollhouse"
}, {
  artist: "San Cisco",
  song: "Awkward"
}, {
  artist: "Jack Stauber",
  song: "Buttercup"
}, {
  artist: "The O'Jays",
  song: "Love Train"
}, {
  artist: "Michael Miglio",
  song: "Never Gonna Let You Go"
}, {
  artist: "Depeche Mode",
  song: "Strange Love"
}, {
  artist: "The Correspondents",
  song: "Fear & Delight"
}, {
  artist: "MGMT",
  song: "Little Dark Age"
}, {
  artist: "UFO",
  song: "Doctor Doctor"
}, {
  artist: "Deep Purple",
  song: "Speed King"
}, {
  artist: "America",
  song: "A Horse With No Name"
}, {
  artist: "Whitesnake",
  song: "Fool For Your Loving"
}, {
  artist: "Worthikids",
  song: "Friends In Low Places"
}, {
  artist: "Chicago",
  song: "25 Or 6 To 4"
}, {
  artist: "The Chats",
  song: "Identity Theft"
}, {
  artist: "Steely Dan",
  song: "Do It Again"
}, {
  artist: "Elvis Presley",
  song: "The Wonder Of You"
}, {
  artist: "Skee-Lo",
  song: "I Wish"
}, {
  artist: "Geto Boys",
  song: "My Ming Playing Tricks On Me"
}, {
  artist: "Madvillian",
  song: "Raid"
}, {
  artist: "The Notorious B.I.G.",
  song: "Everyday Struggle"
}, {
  artist: "Colter Wall",
  song: "The Devil Wears A Suit And Tie"
}, {
  artist: "Charlie Daniels",
  song: "The Devil Went ... To Georgia"
}, {
  artist: "Wintergatan",
  song: "Marble Machine"
}, {
  artist: "José José",
  song: "Sentimientos"
}, {
  artist: "5'nizza",
  song: "Soldat"
}, {
  artist: "Tatsuro Yamashita",
  song: "Marry-go-Round"
} , {
  artist: "Moe Shop",
  song: "Ghost Food"
}, {
  artist: "Omiya",
  song: "Koro Funk"
} 
];

let randomIndex;
let animation = false;
let nasa = [];
let imageCounter = 0;
var DP;

function preload() {
  myFontOne = loadFont('assets/Poppins-Bold.ttf');
  DP = loadSound('assets/Daft Punk.mp3');
  for (let i = 0; i <= 6; i++){
  nasa[i] = loadImage(`assets/nasa_${i}.jpg`);
}
}

function setup() {
  createCanvas(600, 600);
  background('#000000');
  frameRate(8);
  
  imageMode(CENTER);
  button = createButton('Jukebox');
  button.mousePressed(buttonPressed);
  button.class('randomizerButton');
  button = createButton('Playlist Link');
  button.mousePressed(buttonPressedTwo);
  button.class('linkButton');
  compWindow(6, 10);  
}

function draw() {
  if(animation == true) {
  image(nasa[imageCounter], width/2, height/2);
  if (imageCounter < nasa.length - 1){
  imageCounter++;
} else {
  imageCounter = 0;
}
}
}

function randomizer(){
  animation = false; 
  if (music[0]){
  background('#000000');
  compWindow(6, 10);
  randomIndex = int(random(music.length));
  image(random(nasa), width/2, height/2);
  fill('#ffffff');
  textFont(myFontOne);
  textSize(34);
  textAlign(LEFT);
  stroke('#000000');
  strokeWeight(3.5);
  text(music[randomIndex].song, 40, 165)
  textSize(28);
  text(music[randomIndex].artist, 40, 205)
  music.splice(randomIndex, 1);
} else {
  background('#000000');
  compWindow(6, 10);
  textAlign(CENTER);
  text('Explore New Music!', width/2, height - 25);
  
}  
}

function compWindow(xpos, ypos) {
  push();
  translate(xpos, ypos);
  //web page
  strokeWeight(5);
  fill('#464B59');
  rect(0, 0, 585, 400);
  //window
  strokeWeight(2);
  fill('#78DEC7');
  rect(7.5, 37.5, 570, 355);
  //buttons
  fill('#ffffff');
  strokeWeight(2.5);
  rect(492, 7, 25, 25);
  rect(522, 7, 25, 25);
  rect(552, 7, 25, 25);
  //icons
  rect(527, 13.5, 15, 14);
  fill('#000000')
  rect(527, 24.5, 15, 3);
  rect(497, 24.5, 15, 3);
  textFont(myFontOne);
  textSize(23);
  text('X', 556.5, 28.5);
  //contents
  fill('#FF94CC')
  rect(20, 50, 545, 50)
  rect(20, 120, 545, 90)
  //hydrogen left
  noFill();
  circle(110, 300, 100);
  fill('#000000');
  circle(110, 290, 7.5);
  line(110, 295, 110, 315);
  circle(110, 265, 7.5);
  line(110, 242.5, 110, 262.5);
  //hydrogen right
  noFill();
  circle(480, 300, 100);
  fill('#000000');
  circle(480, 290, 7.5);
  line(480, 295, 480, 315);
  circle(480, 238, 7.5);
  line(480, 242.5, 480, 262.5);
  //contents text
  fill('#ffffff');
  stroke('#000000');
  strokeWeight(3.5);
  textFont(myFontOne);
  textSize(36);
  textAlign(CENTER);
  text('Explore New Music', 290.5, 87.5);
  pop();
}

function buttonPressed() {
  animation = true;
  setTimeout(randomizer, 2000);
  DP.stop();
  DP.play();
}

function buttonPressedTwo() {
  window.open('https://youtube.com/playlist?list=PLoPa8W40CaxbtDQO1KYH6bDuKO0fRCIYf')
}