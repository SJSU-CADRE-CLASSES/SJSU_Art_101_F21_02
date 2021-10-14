//hobbies I love to do
let hobbies= [{
}, {
  hobby:"sketching"
}, {
  hobby: "painting"
}, {
  hobby: "sewing"
}, {
  hobby: "cooking"
}, {
  hobby: "writing"
}, {
  hobby: "arts and crafts"];
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
