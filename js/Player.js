class Player{
    constructor(){
this.index = null

this.name = null
this.distance = 0

    }
    getcount(){
        var locofplayercount = database.ref("playercount")
        locofplayercount.on("value",function (data){
            playercount = data.val()
        })
    }
    updatecount(count){
        database.ref("/").update({
            playercount:count
        })

    }
    update(){
        var playerindex = "players/player"+this.index
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance
        })

    }
static getplayerinfo( ){
    var playerinforap = database.ref("players")
    playerinforap.on("value",(data)=>{
        allplayers = data.val()
    })

}
}
