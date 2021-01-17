class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.sid2 = [];
  }

  display() {
    super.display();
    var pos = [this.body.position.x,this.body.position.y];
    this.sid2.push(pos);
    for(var i=0;i<this.sid2.length;i++){
       this.image(this.image1,this.sid2[i][0],this.sid2[i][1]);
    }
    
  }
}
