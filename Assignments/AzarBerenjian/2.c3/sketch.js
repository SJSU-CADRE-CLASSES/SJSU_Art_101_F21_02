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

let randomIndex;
let counter = 0;
let animating = false;
let fx

function preload(){
  //song
  soundFormats('mp3');
  fx = loadSound('Drum Roll - Gaming Sound Effect (HD).mp3');

}
function setup() {
  createCanvas(500, 500);
   textSize(20);
   textAlign(CENTER);
   text("click to randomize", 250, 250);


}

function draw() {

  if(animating == true){
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(random(width), random(height), random(50, 200));
  }

}



function randomizer(){
  animating = false;



  if (animeShows[0]){

  background(random(255),random(255),random(255));
  randomIndex = int(random(animeShows.length));
  text(animeShows[randomIndex].title + " is a " + animeShows[randomIndex].genre + " anime." , 250, 250);
  animeShows.splice(randomIndex, 1);

     } else {
         background(random(255),random(255),random(255));
       text("that's it folks!", 250, 250);
     }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 4000);
  fx.play();

}
