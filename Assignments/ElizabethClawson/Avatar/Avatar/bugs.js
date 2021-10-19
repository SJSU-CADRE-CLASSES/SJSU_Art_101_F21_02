class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.a = random(width);
    this.b = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    this.a += random(-this.speed, this.speed);
    this.b += random(-this.speed, this.speed);
  }

  display() {
    fill(0,0,255,80);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    fill(162,40,255,80);
    ellipse(this.a, this.b, this.diameter, this.diameter);
  }
}