class Game{
    constructor(){

    }
    getstate(){
        var locofgamestate = database.ref("gamestate")
        locofgamestate.on("value",function (data){
            gamestate = data.val()
        })
    }
        update(state){
            database.ref("/").update({
                gamestate:state
            })
        }

        start(){
if(gamestate === 0){
    player=new Player()
    player.getcount()
    form = new Form()
    form.display()

}
car1 = createSprite(100,200)
car2 = createSprite(300,200)
car3 = createSprite(500,200)
car4 = createSprite(700,200)

cars = [car1,car2,car3,car4];
}
play(){
    form.hidedetails()
  //  text("starting",120,100)
    Player.getplayerinfo()
    if(allplayers!== undefined){
       // var displayposition = 130;
       var index = 0;
       var x = 0;
       var y 
        for(var plr in allplayers){
            index = index+1
            x = x+200
            y = displayHeight-allplayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y 
            if(index === player.index){
                cars[index-1].shapeColor =("red")
            }
           
        }
            
        
    }
if(keyIsDown(UP_ARROW )&& player.index !== null ){
player.distance+= 50
player.update()
}
drawSprites()
}

    }

