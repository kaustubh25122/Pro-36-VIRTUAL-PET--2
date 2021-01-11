class Form{
constructor(){
this.input = createInput("name")
this.button = createButton("enter")
this.greeting = createElement("h3")
}
hidedetails(){
    this.greeting.hide()
    this.input.hide()
    this.button.hide()
}
display(){
    var title = createElement("h2")
    title.html("codtechz car game")
    title.position(displayWidth/2,0)
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.button.position(displayWidth/2+40,displayHeight/2)
    this.greeting = createElement("h3")
    this.button.mousePressed(()=>{
       this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playercount += 1
        player.index = playercount
        player.update()
        player.updatecount(playercount)

this.greeting.html("welcome "+player.name)
this.greeting.position(displayWidth/2-20,displayHeight/4)
    })
}
}