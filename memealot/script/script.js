//variabler som behövs
// vill att numret på denna variabel ska ändras när man klickar på att man ska ha en annan bild
    let memepicnumb =0
// lista för alla bilder
let memelist = [document.getElementById("spongebobmeme"), document.getElementById("twobuttons"), document.getElementById("todolist")]

console.log(memelist[0])
console.log(memepicnumb)

// kod för login knapp
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function donthaveanaccount() {
    alert("You don't even have an account, LOL");
}

//funktioner för att byta mellan bilderna
function changetospongebob(){
   memepicnumb = 0
   console.log("clicked!")
}

function changetotwobuttons(){
    memepicnumb = 1
    console.log("clicked!")
}

function changetotodolist(){
    memepicnumb = 2
    console.log("clicked!")
    console.log(memepicnumb)
}

//kod för canvas
function myCanvas() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*4;
    var txt1 = document.getElementById("talkbubble1");
    var txt2 = document.getElementById("talkbubble2");
    var txt3 = document.getElementById("talkbubble3");
    console.log(memepicnumb)
    ctx.drawImage(memelist[memepicnumb],0,0,canvas.width,canvas.width*1.05);
   
    ctx.font = "30px Arial";
    if(memepicnumb == 0){
       ctx.fillText(txt1.value, canvas.width*0.15, canvas.width*0.2);
       ctx.fillText(txt2.value, canvas.width*0.15, canvas.width*0.3);
       ctx.fillText(txt3.value, canvas.width*0.15, canvas.width*0.4);

    }else if(memepicnumb == 1){
        ctx.fillText(txt1.value, canvas.width*0.1, canvas.width*0.15);
        ctx.fillText(txt2.value, canvas.width*0.45, canvas.width*0.1);
        ctx.fillStyle = "#ffffff"
        ctx.fillText(txt3.value, canvas.width*0.15, canvas.width*0.65);
        ctx.fillstyle = "#000000"
 
     }else if(memepicnumb == 2){
        ctx.fillText(txt1.value, canvas.width*0.3, canvas.width*0.4);
        ctx.fillText(txt2.value, canvas.width*0.3, canvas.width*0.5);
        ctx.fillText(txt3.value, canvas.width*0.3, canvas.width*0.6);
 
    }
    
}
