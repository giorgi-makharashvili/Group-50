// 1) addEventListener გამოიყენება იმისთვის, რომ ელემენტზე ვუმაგროთ რეაქცია კონკრეტულ მოქმედებაზე.

// 2)

let img01 = document.getElementById("a1")
let img02 = document.getElementById("a2")
let img03 = document.getElementById("a3")
img01.addEventListener("mouseover", function(){
    img01.src = "psr2.jpg"
})
img01.addEventListener("mouseout", function(){
    img01.src = "psr1.jpg"
})



img02.addEventListener("mouseover", function(){
    img02.src = "psr1.jpg"
})
img02.addEventListener("mouseout", function(){
    img02.src = "psr2.jpg"
})



img03.addEventListener("click", function(){
    img03.src = "psr1.jpg"

})

img03.addEventListener("mouseout", function(){
    img03.src = "psr3.jpg"
    
})

