// my stuffs
let foodName = [
{name: "almond_pepper_chicken_tenders"}  ,
{name:"banh_beo"}  ,
{name:"banh_xeo"}  ,
{name:"beef_filet_mignon"}  ,
{name:"bibimbap"}  ,
{name:"broken_rice"}  ,
{name:"bun_dau_mam_tom"}  ,
{name:"bun_oc"}  ,
{name:"chicken_rice"}  ,
{name:"curry"}  ,
{name:"duck_noodle"}  ,
{name:"hamburger"}  ,
{name:"omelette_bento"}  ,
{name:"pho"}  ,
{name:"pizza"}  ,
{name:"ramen"}  ,
{name:"spaghetti"},
{name:"steak"},
{name:"tom_yum"},
];
let randomIndex;
let backgroundColor;
let animate = false;
let foods = [];
let imageCounter = 0;
let button;

function preload() {
  for (let i = 0; i < foodName.length; i++) {
    img = loadImage("assets/food_" + foodName[i].name + ".jpg")
    foods[i] = {
      image: img,
      name: foodName[i].name
    }
  }
}

function setup() {
  createCanvas(1000, 1000);
  background(color(random(255, 205), random(205, 255), random(205, 205)));
  backgroundColor = color(random(255, 205), random(205, 255), random(205, 205));
  textSize(30);
  fill(0);
  frameRate(12);
  imageMode(CENTER);
  textAlign(CENTER);
  text("click the button bellow to begin",width/2, height/2);
  button = createButton("start here!")
  button.mousePressed(buttonPressed);
}
// animate the ellipses
function draw() {
  if (animate == true) {
    clear();
    // noStroke();
    // fill(random(255, 205), random(205, 255), random(205, 205))
    // ellipse(random(width), random(height), random(10, 200));
    food = foods[imageCounter]
    image(food.image, width / 2, height / 2);

    if (imageCounter < foods.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }

  }
}

function randomizer() {
  animate = false;
  if (foods.length > 0) {
    // get random object from stuffs
    background(backgroundColor);
    randomIndex = int(random(foods.length));
    fill(0);
    food = foods[randomIndex]
    image(food.image, width / 2, height /2);
    foodName = food.name.replace("_", " ");
    text(
      `this is ${foodName}`,
      width / 2,
      height /1.2
    );
    // and then take that object out of the array
    foods.splice(randomIndex, 1);
  } else {
    //   draw the background again so it does not overlay the previous object
    background(backgroundColor);
    // when we show all obejcts, nothing else to show
    fill(0);
    text("Sorry, I don't have anything left :(", width / 4, height / 2);
  }
}

function buttonPressed() {
  animate = true;
  setTimeout(randomizer, 2000);
}
