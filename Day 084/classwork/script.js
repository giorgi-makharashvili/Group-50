let p1 = document.querySelector("p")
let b1 = document.querySelector("button")

p1.addEventListener("click", function(event){
    event.target.style.color = "red"
    console.log(event.target.innerText)
})

b1.addEventListener("click", function(event){
    event.target.style.color = "red"
    console.log(event.target.innerText)
})