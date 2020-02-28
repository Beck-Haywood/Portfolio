//my Scripts 
        
const card1 = document.getElementById('c1')
const card2 = document.getElementById('c2')
const card3 = document.getElementById('c3')
const card4 = document.getElementById('c4')

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')

const close1 = document.getElementById('close1')
const close2 = document.getElementById('close2')
const close3 = document.getElementById('close3')
const close4 = document.getElementById('close4')

const cont = document.getElementById('cont')

function hideButton(button) {
    var x = document.getElementById(button);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function lessTheOppacity(button)
{
    var z = document.getElementById(button);
    var oppArray = ["1", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
    var x = 0;
    (function next() {
        z.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 40); //depending on how fast you want to fade
        }
    })();
}
function increaseTheOppacity(button)
{
    var z = document.getElementById(button);
    var oppArray = ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "1"];
    var x = 0;
    (function next() {
        z.style.opacity = oppArray[x];
        if(++x < oppArray.length) {
            setTimeout(next, 40); //depending on how fast you want to fade
        }
    })();
}

button1.addEventListener('click', function(e) {
    card1.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    lessTheOppacity("hide1")
    lessTheOppacity("hide2")
    lessTheOppacity("hide3")
    lessTheOppacity("hide4")
})
button2.addEventListener('click', function(e) {
    card2.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    lessTheOppacity("hide1")
    lessTheOppacity("hide2")
    lessTheOppacity("hide3")
    lessTheOppacity("hide4")
})
button3.addEventListener('click', function(e) {
    card3.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    lessTheOppacity("hide1")
    lessTheOppacity("hide2")
    lessTheOppacity("hide3")
    lessTheOppacity("hide4")
})

close1.addEventListener('click', function(e) {
    card1.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    increaseTheOppacity("hide1")
    increaseTheOppacity("hide2")
    increaseTheOppacity("hide3")
    increaseTheOppacity("hide4")
})
close2.addEventListener('click', function(e) {
    card2.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    increaseTheOppacity("hide1")
    increaseTheOppacity("hide2")
    increaseTheOppacity("hide3")
    increaseTheOppacity("hide4")
})
close3.addEventListener('click', function(e) {
    card3.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    increaseTheOppacity("hide1")
    increaseTheOppacity("hide2")
    increaseTheOppacity("hide3")
    increaseTheOppacity("hide4")
})
