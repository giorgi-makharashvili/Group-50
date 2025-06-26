let button = document.querySelector("button");

let player1 = document.getElementById("player1");

let player2 = document.getElementById("player2");

let score1 = document.getElementById("score1");

let score2 = document.getElementById("score2");

let h1 = document.getElementById("h1ta");

let audio = new Audio("./audio/dice mp3.mp3");
let audio2 = new Audio("./audio/gg.wav");

let body = document.body

let btns = document.getElementById("btn1")

let gif = document.querySelector(".gif1")

let background = document.querySelector(".background")

count1 = 0;
count2 = 0;

button.addEventListener("click", function(){
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1
    setTimeout(function(){
        player1.src = `./img/dice_${counter1}.png`
        player2.src = `./img/dice_${counter2}.png`
        switch(true){
            case counter1 > counter2:
                h1.textContent = "Player 1 won!"
                count1++
                break
            case counter2 > counter1:
                h1.textContent = "Player 2 won!"
                count2++
                break
            default:
                h1.textContent = "It's a Draw!"
    }
    score1.textContent = count1
    score2.textContent = count2

    if (count1 == 5){
        background.innerHTML = player1style
        audio2.play()
        gif.style.display = "block"
    } else if (count2 == 5){
        background.innerHTML = player2style
        audio2.play()
        gif.style.display = "block"
    }

    }, 1100)

    let player1style = `<div class='bigdiv'><div class='won'><div class='cover'><h2 class='h2'>PLAYER 1 WON!</h2><div class='scoresdiv'><h3>5</h3><h3 id='hh3'>:</h3><h3>${count2}</h3></div><button id='btn1'>PLAY AGAIN</button></div></div></div>`
    let player2style = `<div class='bigdiv'><div class='won'><div class='cover'><h2 class='h2'>PLAYER 2 WON!</h2><div class='scoresdiv'><h3>${count1}</h3><h3 id='hh3'>:</h3><h3>5</h3></div><button id='btn1'>PLAY AGAIN</button></div></div></div>`

    audio.play()
})

document.addEventListener("click", function(e){
    if (e.target && e.target.id === "btn1") {
        location.reload();
    }
});