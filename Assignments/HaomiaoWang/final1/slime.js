class Slime {
  constructor(){
    this.r = 175;
    this.x = random(w);
    this.y = 0 - this.r;

  }

display(){
  image(slimeImg, this.x, this.y, this.r, this.r);
}

move(){
  this.y++;
}

}
