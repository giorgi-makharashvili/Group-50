let div = document.querySelector("div")
let posX = 1400; 
let posY = 700;
let isMoving = false;

  document.addEventListener("keydown", function(event){
    if (isMoving) return;
    isMoving = true;

    setTimeout(() => isMoving = false, 50);


    if (event.key === "ArrowRight") {
      posX += 20;
      div.style.left = posX + "px";
    }

    if (event.key === "ArrowLeft") {
      posX -= 20;
      div.style.left = posX + "px";
    }

    if (event.key === "ArrowUp") {
      posY -= 20;
      div.style.top = posY + "px";
    }

    if (event.key === "ArrowDown") {
      posY += 20;
      div.style.top = posY + "px";
    }
  });
