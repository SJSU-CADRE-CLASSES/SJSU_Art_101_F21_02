let tvshow = [
  "Your family is dysfunctional? Watch Schitts Creek with your family tonight.",
  "Are you my mom? Downton Abbey is what you want to watch tonight.",
"Hi dad. Go watch Star Trek",
"Hi mom. Hi Dad. Go back to watching The Crown",
" If you're done with the The Crown then The Queen's Gambit is for you.",
"If you feel nostalgiac for the 80s you should watch Stranger Things.", "This option is for my highschool physics teacher only; Breaking Bad", "What are you like 13 in circa 2012? Watch Pretty Little Liars",
"Oh so your depressed....Bojack Horseman",
"Everyone needs to watch One Punch Man.", 
"Get ur life together; Sparking Joy with Marie Kondo",
"If your a theater kid from the 2000s watch Glee",
"Sure, not a furry. Anyway watch Beastars",
  "If you're done with One Punch Man, then watch Saiki K."]


function setup() {
  cnv= createCanvas (400,400);
  background (200)
  cnv.mouseClicked(pick);
  letter = ""
}

function draw() {
  background(200,0,0);
  text(letter, 10, 50)
}

function pick() {
  letter = (tvshow[int(random(tvshow.length))])
}