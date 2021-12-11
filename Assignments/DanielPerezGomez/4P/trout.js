class Trout {
    constructor() {
        this.r = 30;
        this.r2 = 50;
        this.x = random(w);
        this.y = 0 - this.r;
        this.speed = 3;
    }

    display() {
        image(troutImage,this.x, this.y, this.r, this.r2);
    }

    move() {
        this.y += this.speed;
    }
}