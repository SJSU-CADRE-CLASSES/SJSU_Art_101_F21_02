//this likely won't be the topic for the final version, just a test run
let animeShows =
[{title:"Jojo's Bizarre Adventure", genre: "Shounen"},
{title:"Lucky Star", genre: "Shoujo"},
{title: "HunterxHunter", genre: "Shounen"},
{title: "Hataraku Maou-sama", genre: "Shoujo"},
{title: "Fullmetal Alchemist", genre: "Shounen"},
{title: "Heaven's Lost Property", genre: "Shoujo"},
{title: "Beastars", genre: "Hybrid"},
{title: "BNA", genre: "Hybrid"},
{title: "Ouran High School Host Club", genre: "Shoujo"},
{title: "Soul Eater", genre: "Shounen"},
{title: "My Hero Academia", genre: "Shounen"},
{title: "Kill la Kill", genre: "Shounen"},
{title: "Danganronpa", genre: "Shounen"}]

function setup() {
  createCanvas(400, 400);

}

function draw() {

}

function mousePressed() {
  background(random(255));
  randomIndex = int(random(animeShows.length));
  text(animeShows[randomIndex].title, 200, 200);
  animeShows.splice(randomIndex, 1);
}
