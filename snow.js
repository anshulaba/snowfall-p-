class snow
{
  constructor()
  {
      var options = { 'restitution' : 1,
                      'friction' : 0.6,
                      'density' : 0.6
                    }
      this.snowballs=Bodies.rectangle(200,200,50,50,options);
      this.image = loadImage("snow4.webp");
      this.width=50;
      this.height=50;
      World.add(world,this.snowballs);
      this.visibility=255;
  }

  display()
  {
      var pos=this.snowballs.position;
      var angle=this.snowballs.angle;
      push();
      rotate(angle);
      translate(pos.x,pos.y);
      this.visibility=this.visibility-3;
      tint(255,this.visibility);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
  }

  update()
  {
    if(this.snow.position.y>height)
    {
      Matter.Body.setPosition(this.snow,{x:RandomSource()})
    }
  }

}