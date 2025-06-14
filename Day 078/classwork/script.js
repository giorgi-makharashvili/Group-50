// 1)
let p1 = document.querySelector("p")
p1.style.color = "red"

let p2 = document.querySelectorAll("p")
p2[1].style.color = "blue"
p2[2].style.color = "green"

//2)
let body = document.body

let parentDiv = document.createElement("div")
body.appendChild(parentDiv)

let div1 = document.createElement("div")
let div2 = document.createElement("div")

parentDiv.appendChild(div1)
parentDiv.appendChild(div2)
parentDiv.style.height = "600px"

div1.style.width = "200px"
div1.style.height = "200px"
div1.style.backgroundColor = "red"

div2.style.width = "200px"
div2.style.height = "200px"
div2.style.backgroundColor = "green"

parentDiv.style.display = "flex"
parentDiv.style.flexDirection = "column"
parentDiv.style.justifyContent = "space-between"
parentDiv.style.alignItems = "center"