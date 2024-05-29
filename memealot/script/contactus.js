mailsub = "default text! maybe you forgot your subject?"
mailbody = "default text! maybe you forgot your mail body?"
mailtime = "2000-01-01"

function writesub(){
    mailsub = document.getElementById("mailsubject").value
    maildone = "mailto:meme-a-lot@goatmail.uk?subject="+mailsub+"&body="+mailbody
    button=document.getElementById("mailbutton")
    button.setAttribute("href",maildone)
}

function writemail(){
    mailbody = document.getElementById("mailbody").value
    maildone = "mailto:meme-a-lot@goatmail.uk?subject="+mailsub+"&body="+mailbody
    button=document.getElementById("mailbutton")
    button.setAttribute("href",maildone)
}

function writetime(){
    mailtime = document.getElementById("mailtime").value
    maildone = "mailto:meme-a-lot@goatmail.uk?subject="+mailsub+"&body="+mailbody+"      written:"+mailtime
    button=document.getElementById("mailbutton")
    button.setAttribute("href",maildone)
}