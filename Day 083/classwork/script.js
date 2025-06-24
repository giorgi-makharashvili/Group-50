let hexColor = "0123456789abcdef";
let resultColor = "#"

let clickButton = document.getElementById("b1")
let span = document.getElementById("span1")
let main = document.querySelector("main")

clickButton.addEventListener('click', function(){    
    for (let i =0; i<6; i++) { 
    let randomIndex = Math.floor(Math.random()*16)
    resultColor += hexColor[randomIndex]
    }
    span.textContent = resultColor
    span.style.color = resultColor
    main.style.backgroundColor = resultColor
    resultColor = "#"

    let audio = new Audio("gg.wav")
    audio.play()
    
    
})
