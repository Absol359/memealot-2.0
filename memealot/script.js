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

// vill att numret på denna variabel ska ändras när man klickar på att man ska ha en annan bild
let txtnumb = 1
//kod för canvas
function myCanvas() {
    const canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("spongebobmeme");
    var txt1 = document.getElementById("talkbubble1");
    var txt2 = document.getElementById("talkbubble2");
    var txt3 = document.getElementById("talkbubble3");
    ctx.drawImage(img,1,1);
    ctx.font = "30px Arial";
    if(txtnumb == 1){
       ctx.fillText(txt1.value, 100, 100);
       ctx.fillText(txt2.value, 100, 160);
       ctx.fillText(txt3.value, 100, 220);

    }
    
  }