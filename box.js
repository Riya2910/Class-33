class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1.0,
        'friction':0.3,
        'density':0.04
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(6)
    stroke("green")
    fill("red");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
