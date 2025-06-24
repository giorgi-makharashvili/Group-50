//3)

let img01 = document.getElementById("a1")
let img02 = document.getElementById("a2")

img01.addEventListener("mouseover", function(){
    img01.src = "psr2.jpg"
})
img01.addEventListener("mouseout", function(){
    img01.src = "psr3.jpg"
})


img02.addEventListener("mouseover", function(){
    img02.src = "psr1.jpg"

})

img02.addEventListener("click", function(){
    img02.src= "psr3.jpg"
})

img02.addEventListener("mouseout", function(){
    img02.src= "psr4.jpg"
})
