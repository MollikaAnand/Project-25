class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }

    //changes Made
    this.body = Bodies.circle(x, y,  (radius-20)/2, options);
    this.radius = radius
    this.image=loadImage("crumpledPaper.png") 
    World.add(world, this.body);

    console.log(this.body)
    }
  display(){
//Chnages Made
    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
      rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
			//ellipse(0,0,this.r, this.r);
      pop()
  }
  };