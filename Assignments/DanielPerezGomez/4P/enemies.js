class Enemy {
    constructor() {
        this.r = 40;
        this.x = random(w);
        this.y = 0 - this.r;
        this.speed = 4;
    }

    display() {
        push();
        fill('red')
        rect(this.x, this.y, this.r, this.r);
        pop();
    }

    move() {
        this.y += this.speed;
    }
}