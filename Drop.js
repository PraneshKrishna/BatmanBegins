class Drop
{
	constructor(x,y,radius)
	{
		var options={
			friction:0.001,
            restitution:0.1			
			}
		this.x=x;
		this.y=y;
        this.radius=5;
		this.body=Bodies.circle(x, y , 5 , options);
 		World.add(world, this.body);

	}

updateY(){
    if (this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}

	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(RADIUS)
			fill("blue")
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}

