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
    canvas.height = window.innerHeight;
    var txt1 = document.getElementById("talkbubble1");
    var txt2 = document.getElementById("talkbubble2");
    var txt3 = document.getElementById("talkbubble3");
    console.log(memepicnumb)
    ctx.drawImage(memelist[memepicnumb],1,1);
   
    ctx.font = "30px Arial";
    if(memepicnumb == 0){
       ctx.fillText(txt1.value, 100, 100);
       ctx.fillText(txt2.value, 100, 160);
       ctx.fillText(txt3.value, 100, 220);

    }else if(memepicnumb == 1){
        ctx.fillText(txt1.value, 60, 120);
        ctx.fillText(txt2.value, 240, 100);
        ctx.fillStyle = "#ffffff"
        ctx.fillText(txt3.value, 40, 440);
        ctx.fillstyle = "#000000"
 
     }else if(memepicnumb == 2){
        ctx.fillText(txt1.value, 310, 250);
        ctx.fillText(txt2.value, 320, 300);
        ctx.fillText(txt3.value, 330, 350);
 
     }
    
  }

// skript för about us  

const xValues = ["the sponge bob meme","the red and blue button meme","Patrick's to do-list meme"];
const yValues = [10, 6, 13];
const barColors = ["yellow", "red","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "What is the most popular meme here?"
    }
  }
});