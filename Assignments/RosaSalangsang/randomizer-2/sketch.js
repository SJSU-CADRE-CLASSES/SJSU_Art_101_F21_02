///rainbow
let randomIndex;
let animating = false;
let fortune = [
  { name: "Heck yeah." },
  { name: "no thoughts, head empty." },
  { name: "Don't count on it." },
  { name: "Yes, definitely, absolutely." },
  { name: "Out for lunch, ask later" },
  { name: "Oh $%@&..." },
  { name: "Yea." },
  { name: "*takes off earbud* Sorry, what?" },
  { name: "Uh...outlook seems bleak, bud." },
  { name: "You got this!" },
  { name: "*dial-up noises*" },
  { name: "lol good luck, loser." },
  { name: "Sure, why the heck not." },
  { name: "Am I actually your best option?" },
  { name: "Are you serious rn?" },
];

function setup() {
  createCanvas(400, 400);
  background(200);
}

function draw() {
  ///bob
  strokeWeight(2);
  fill(240);
  ellipse(200, 300, 150);
  fill(50);
  ellipse(160, 295, 20);
  ellipse(230, 280, 20);
  line(240, 350, 160, 345);
  triangle(200, 375, 120, 350, 140, 390);
  triangle(200, 375, 280, 340, 250, 390);
  ellipse(200, 375, 20);

  ///dialouge
  strokeWeight(0);
  textStyle(NORMAL);
  textSize(15);
  textAlign(CENTER);
  text("I am the all-knowing Bob.", 200, 50);
  text("I shall answer any Yes/No questions", 200, 70);

  ///nitty gritty stuff
  if (animating == true) {
    fill(250);
    ellipse(120, 235, 20);
    ellipse(100, 205, 20);
    ellipse(200, 150, 250, 80);
    fill(50);
    ellipse(180, 150, 10);
    ellipse(200, 150, 10);
    ellipse(220, 150, 10);
  }
}
function fortunetell() {
  animating = false;
  if (fortune[0]) {
    background(200);
    fill(250);
    ellipse(120, 235, 20);
    ellipse(100, 205, 20);
    ellipse(200, 150, 250, 80);
    randomIndex = int(random(fortune.length));
    fill(50);
    textStyle(BOLDITALIC);
    textSize(15);
    text(fortune[randomIndex].name, 200, 150);
    textAlign(CENTER);
    fortune.splice(randomIndex, 1);
  } else {
    background(200);
    fill(50);
    textSize(15);
    strokeWeight(2);
    textStyle(BOLD);
    text("Am tired, come back later", 200, 150);
  }
}
function mouseClicked() {
  animating = true;
  setTimeout(fortunetell, 2000);
}
