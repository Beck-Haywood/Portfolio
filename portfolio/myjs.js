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

button1.addEventListener('click', function(e) {
    card1.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
button2.addEventListener('click', function(e) {
    card2.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
button3.addEventListener('click', function(e) {
    card3.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
button4.addEventListener('click', function(e) {
    card4.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})

close1.addEventListener('click', function(e) {
    card1.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
close2.addEventListener('click', function(e) {
    card2.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
close3.addEventListener('click', function(e) {
    card3.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})
close4.addEventListener('click', function(e) {
    card4.classList.toggle('flip')
    cont.classList.toggle('clickclose')
    hideButton("hide1")
    hideButton("hide2")
    hideButton("hide3")
    hideButton("hide4")
})