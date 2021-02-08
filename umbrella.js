class Umbrella{
constructor(x,y){
var options= {
 isStatic:true,
 friction:0.1,
 density:2.5
}
this.body = Bodies.circle(x,y,10,options)
this.radius= 10;
World.add(world,this.body)
this.image = loadImage("images/walking_1.png")
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS);

    circle(0,0,this.radius);
    imageMode(CENTER);
    image(this.image,0,0,250,250);
    pop();
}


}