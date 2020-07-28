class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        strokeWeight (2);
        stroke (0, 0, 0);
        this.body = createSprite(x, y, width, height, options);
        this.body.shapeColor = color("pink");
        this.width = width;
        this.height = height;
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}