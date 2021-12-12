class Player {
  constructor() {
    this.r = 60; //size of player
    this.x = w / 2;
    this.y = h - this.r;
    this.speed = 4;
    this.direction = 'still';
  }

  display() {
    image(playerImg, this.x, this.y, this.r, this.r);
  }

  move() {
    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
        //decrease y position
        if (this.y > 0) {
        this.y -= this.speed;
      }
        break;
      case 'down':
        //increase ypos
        if (this.y < h - this.r) {
        this.y += this.speed;
      }
        break;
      case 'right':
        //increase xpos
        if (this.x < w - this.r){
          this.x += this.speed;
        }
        break;
      case 'left':
        //decrease xpos
        if (this.x > 0){
        this.x -= this.speed;
      }
        break;
        default:
        break;
    }
  }
}
