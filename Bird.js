class Bird extends BaseClass {
  constructor(x,y){
    
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[];
    this.image2=loadImage("sprites/smoke.png");
  }

  display() {
    super.display();
    var pos=[this.body.position.x , this.body.position.y];
    if(this.body.velocity.x>10&&this.body.position.x>200)
    {
    this.trajectory.push(pos);
    }
    for(var i=0;i<this.trajectory.length;i=i+1)
    {
      image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);
    }
   

    
  }
}
