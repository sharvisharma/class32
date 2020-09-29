class Box {
  constructor(x,y,width,height){
    var options={
      'restitution':0.8,
      'friction':0.3,
      'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);

  }
  display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    //rectMode(CENTRE);
    rect(0,0,this.width,this.height);
    fill(255);
    rect(0,0,this.width,this,height);
    pop();
  }
}



async function getTime(){
  var response= await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responsejson= await response.json();
  console.log(responsejson);
  var dt=responsejson.datetime;
  console.log(dt);
  var hour=dt.slice(11,13);
  console.log(hour);
}


  