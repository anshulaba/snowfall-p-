class ground
{
  constructor()
  {
      var options = { 
                      isStatic : true
                    }
      this.ground=Bodies.rectangle(0,790,800,20,options);
      this.width=800;
      this.height=20;
      World.add(world,this.ground);
  }

  display()
  {
      var pos=this.ground.position;
      rect(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
  }

}