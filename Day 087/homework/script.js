let button = document.querySelector("button");

let player1 = document.getElementById("player1");

let player2 = document.getElementById("player2");

let score1 = document.getElementById("score1");

let score2 = document.getElementById("score2");

let h1 = document.getElementById("h1ta");

let audio = new Audio("./audio/dice mp3.mp3");

let body = document.body

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
        body.innerHTML = player1style
    } else if (count2 == 5){
        body.innerHTML = player2style
    }

    }, 1100)

    let player1style = `<div class='bigdiv'><div class='won'><div class='cover'><h2 class='h2'>PLAYER 1 WON!</h2><div class='scoresdiv'><h3>5</h3><h3 id='hh3'>:</h3><h3>${count2}</h3></div><button>PLAY AGAIN</button></div></div></div>`
    let player2style = `<div class='bigdiv'><div class='won'><div class='cover'><h2 class='h2'>PLAYER 2 WON!</h2><div class='scoresdiv'><h3>${count1}</h3><h3 id='hh3'>:</h3><h3>5</h3></div><button>PLAY AGAIN</button></div></div></div>`

    audio.play()
})