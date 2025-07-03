let cart = document.querySelector("#img1");
let opener = document.querySelector(".shopping");

cart.addEventListener("click", function () {
    opener.style.transform = "translateX(0%)";
});

let closeBtn = document.querySelector("#close div");

closeBtn.addEventListener("click", function () {
    opener.style.transform = "translateX(100%)";
});

let adder = document.querySelectorAll(".adder");

let count = 0;
let counter = document.querySelectorAll(".l11");
let prodCont = document.querySelector(".productcont");

adder.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let pcslot = btn.closest(".pcslot");
        let img = pcslot.querySelector("img").src;
        let name = pcslot.querySelector("p").textContent;
        let price = pcslot.querySelector(".save").textContent;

        count++;
        counter.forEach(el => el.textContent = count);

        let newProd = document.createElement("div");
        newProd.classList.add("product");

        let pcImg = document.createElement("img");
        pcImg.src = img;

        let childProdDiv = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.textContent = name;

        let p = document.createElement("p");
        p.textContent = price;

        let but = document.createElement("button");
        but.textContent = "Remove";

        but.addEventListener("click", function () {
            newProd.remove();
            count--;
            counter.forEach(el => el.textContent = count);
        });

        childProdDiv.appendChild(h3);
        childProdDiv.appendChild(p);
        childProdDiv.appendChild(but);

        newProd.appendChild(pcImg);
        newProd.appendChild(childProdDiv);

        prodCont.appendChild(newProd);
    });
});