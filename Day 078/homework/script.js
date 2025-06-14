let body = document.body

let img = document.createElement("img")
let button = document.createElement("button")

body.appendChild(img)
body.appendChild(button)

button.innerText = "change picture"

img.src = "psr1.jpg"



button.onclick = function() {
    if (img.src.endsWith("psr1.jpg")) {
        img.src = "psr2.jpg";
    } else {
        img.src = "psr1.jpg";
    }
}

