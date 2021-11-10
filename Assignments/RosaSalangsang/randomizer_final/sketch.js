let fortuneIndex;
let animating = false;
let button;
let input;
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
  { name: "Of course!" },
  { name: "*dial-up noises*" },
  { name: "lol good luck, loser." },
  { name: "Sure, why the heck not." },
  { name: "Am I actually your best option?" },
  { name: "Are you serious rn? Heck no." },
  { name: "Judging by the signs, yes." },
  { name: "Idk, Google it." },
  { name: "Oh gosh no." },
  { name: "Oh, totally." },
  { name: "Ask the nerd who got me here." },
  { name: "Nope." },
  { name: "Ok, sure." },
  { name: "*snores*" },
  { name: "Bad news, buddy..." },
];
function setup() {
  createCanvas(500, 500);
  background(200);
  input = createInput();
  input.class("fortuneInput");
  button = createButton("Submit question, I guess.");
  button.mouseClicked(buttonPressed);
  button.class("fortuneButton");

}

function draw() {
  ///bob
  strokeWeight(2);
  fill(240);
  ellipse(250, 300, 150);
  fill(50);
  ellipse(210, 295, 20);
  ellipse(280, 280, 20);
  line(290, 350, 210, 345);
  triangle(250, 375, 170, 350, 190, 390);
  triangle(250, 375, 330, 340, 300, 390);
  ellipse(250, 375, 20);

  ///dialouge
  strokeWeight(0);
  textStyle(NORMAL);
  textSize(15);
  textAlign(CENTER);
  text("I am the all-knowing Bob.", 250, 50);
  text("I shall answer any Yes/No questions", 250, 70);

  ///nitty gritty stuff
  if (animating == true) {
    fill("skyblue");
    ellipse(210, 295, 20);
    ellipse(280, 280, 20);
    fill(250);
    ellipse(170, 235, 20);
    ellipse(150, 205, 20);
    ellipse(250, 150, 260, 80);
    fill(50);
    ellipse(230, 150, 10);
    ellipse(250, 150, 10);
    ellipse(270, 150, 10);
  }
}
function fortunetell() {
  animating = false;
  if (fortune[0]) {
    background(200);
    fill(250);
    ellipse(170, 235, 20);
    ellipse(150, 205, 20);
    ellipse(250, 150, 260, 80);
    fortuneIndex = int(random(fortune.length));
    fill(50);
    textStyle(BOLDITALIC);
    textSize(15);
    text(fortune[fortuneIndex].name, 250, 155);
    textAlign(CENTER);
    fortune.splice(fortuneIndex, 1);
  } else {
    background(200);
    fill(50);
    textSize(15);
    strokeWeight(2);
    textStyle(BOLD);
    text("Am tired, come back later", 250, 155);
  }
}
function buttonPressed() {
  animating = true;
  setTimeout(fortunetell, 1500);
  input.value("");
}
