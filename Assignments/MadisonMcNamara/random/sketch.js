//My Random
let goTravel =
[{where:"Japan"}
{where:"Thailand"}
{where: "Paris"}
{where: "New Orleans"}
{where: "Hawaii"}
{where: "Dubai"}
{where: "Barcelona"}
]

function setup() {
  createCanvas(400, 400);

}

function draw() {

}

function mousePressed() {
  background(random(255));
  randomIndex = int(random(goTravel.length));
  text(goTravel[randomIndex].where, 200, 200);
  goTravel.splice(randomIndex, 1);
}
