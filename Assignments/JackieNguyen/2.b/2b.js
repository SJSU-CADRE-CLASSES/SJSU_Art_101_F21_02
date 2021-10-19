//hobbies I love to do
let hobbies= [{
  hobby: "I love sketching flowers and faces",

}, {
  hobby: "I love painting backgrounds and scenery"
}, {
  hobby: "I love sewing skirts and dresses"
}, {
  hobby: "I love cooking and trying out  new recipes"
}, {
  hobby: "I love writing stories, whether its original fiction or fanfiction"
}, {
  hobby: "I love to gardening with my mom"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
}

  function draw() {

}
if (hobbies[0]){

function mousePressed(){
if (hobbies[0]){
  background(random(200,255));
  randomIndex+int(random(hobbies.length));
  text(hobbies{randomIndex}.hobby, 300,300);
  hobbies.splice(randomIndex,1);
} else{
  text("nothing left!", 300,300);
}
}
