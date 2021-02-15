var b1,database,position

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    b1 = createSprite(250,250,10,10);
    b1.shapeColor = "black";

    var b1Position = database.ref('ball/position');
    b1Position.on("value",readPosition);
    

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y
    })
}

function readPosition(data){
    position=data.val();
    b1.x=position.x;
    b1.y=position.y;
}