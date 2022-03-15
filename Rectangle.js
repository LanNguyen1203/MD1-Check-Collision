class Rectangle {
    constructor(x,y,width,height,colors) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colors = colors;
    }
    drawRectangle(ctx){
        ctx.stroke();
        ctx.fillStyle = this.colors;
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }
    moveLeft(){
        this.x -= 20;
    }
    moveRight(){
        this.x += 20;
    }
    moveUp(){
        thix.y -= 20;
    }
    moveDown(){
        this.y += 20;
    }
}