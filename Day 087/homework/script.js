let button = document.querySelector("button")

let player1 = document.getElementById("player1")

let player2 = document.getElementById("player2")

let score1 = document.getElementById("score1")

let score2 = document.getElementById("score2")

let h1 = document.getElementById("h1ta")

button.addEventListener("click", function(){
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1
    player1.src = `./img/dice_${counter1}.png`
    player2.src = `./img/dice_${counter2}.png`
    switch(true){
        case counter1 > counter2:
            h1.textContent = "Player 1 won!"
            break
        case counter2 > counter1:
            h1.textContent = "Player 2 won!"
            break
        default:
            h1.textContent = "It's a Draw!"
    }
})