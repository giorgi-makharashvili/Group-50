let audios = [
    "./audio/crash.mp3",
    "./audio/kick-bass.mp3",
    "./audio/snare.mp3",
    "./audio/tom-1.mp3",
    "./audio/tom-2.mp3",
    "./audio/tom-3.mp3",
    "./audio/tom-4.mp3",
]

let instruments = document.querySelectorAll(".a1");

document.addEventListener("keydown", function(event){
    if (event.key === "w"){
        let gaudio = new Audio(audios[0])
        gaudio.play()
        instruments[0].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "a"){
        let gaudio = new Audio(audios[1])
        gaudio.play()
        instruments[1].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "s"){
        let gaudio = new Audio(audios[2])
        gaudio.play()
        instruments[2].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "d"){
        let gaudio = new Audio(audios[3])
        gaudio.play()
        instruments[3].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "j"){
        let gaudio = new Audio(audios[4])
        gaudio.play()
        instruments[4].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "k"){
        let gaudio = new Audio(audios[5])
        gaudio.play()
        instruments[5].style.border = "10px solid rgb(128, 130, 136)"
    }
    if (event.key === "l"){
        let gaudio = new Audio(audios[6])
        gaudio.play()
        instruments[6].style.border = "10px solid rgb(128, 130, 136)"
    }
})

document.addEventListener("keyup", function(event){
    if (event.key === "w") {
        instruments[0].style.border = "10px solid  #3d465d"
    }
    if (event.key === "a") {
        instruments[1].style.border = "10px solid #3d465d"
    }
    if (event.key === "s") {
        instruments[2].style.border = "10px solid #3d465d"
    }
    if (event.key === "d") {
        instruments[3].style.border = "10px solid #3d465d"
    }
    if (event.key === "j") {
        instruments[4].style.border = "10px solid #3d465d"
    }
    if (event.key === "k") {
        instruments[5].style.border = "10px solid #3d465d"
    }
    if (event.key === "l") {
        instruments[6].style.border = "10px solid #3d465d"
    }
})






