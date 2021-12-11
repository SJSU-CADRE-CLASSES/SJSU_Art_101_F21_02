class Enemy {
    constructor() {
        this.r = 30;
        this.r2 = 40;
        this.x = random(w);
        this.y = 0 - this.r;
        this.speed = 4;
    }

    display() {
        image(enemyImage,this.x, this.y, this.r, this.r2);
    }

    move() {
        this.y += this.speed;
    }
}