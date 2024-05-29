music = new Audio('rickroll.mp3')
let rollbutton = document.getElementById("rollbutton")
let rickgif = document.getElementById("rick-roll")

function rollme(){
    if(rollbutton.innerText == "unroll me!"){
        rollbutton.innerText = "roll me!"
        music.pause()
        rickgif.setAttribute("height","0")
        rickgif.setAttribute("width","0")
    }else{
        music.play()
        console.log("You've been rickrolled!")
        rollbutton.innerText="unroll me!"
        rickgif.setAttribute("height","330")
        rickgif.setAttribute("width","440")

        
    }
    
}
