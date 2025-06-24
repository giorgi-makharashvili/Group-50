// 1)
let p1 = document.getElementById("p1")
p1.addEventListener("click", function(){
    p1.textContent = "gio best"
})

//2)
let img1 = document.getElementById("img1")

img1.addEventListener("mouseover", function(){
    img1.src = "psr2.jpg"
})

img1.addEventListener("mouseout", function(){
    img1.src = "psr1.jpg"
})

//3)
// სრული ჩანაწერი არდევს ამიტომ ვერ შევძელი იმ ფუნქციის ნახვა.