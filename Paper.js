class Paper{

constructor(x,y,r){


var option1={
isStatic:false,
restitution:0.3,
density:1.2,
friction:0.5


}
this.x=x;
this.y=y;
this.r=r-20;
this.body=Bodies.circle(this.x,this.y,this.r/2,option1)
this.image=loadImage("paper.png")
World.add(world,this.body);

}
display(){

var p=this.body.position;
push();
translate(p.x,p.y);
imageMode(CENTER);
strokeWeight(3);
fill("white")
image(this.image,0,0,this.r,this.r);
pop();
}


}