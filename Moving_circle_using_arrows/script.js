const circle = document.querySelector("div"); 
let playerX = 50, playerY = 50; 

document.addEventListener("keydown",function(event){
    const speed=30;
    const windowwidth = window.innerWidth-50;
    const windowheight = window.innerHeight-50;

    if(event.key ==="ArrowRight" && playerX<windowwidth)
    {
        playerX+=speed;
    }
    else if (event.key ==="ArrowLeft" && playerX>0)
    {
        playerX-=speed;
    }
    else if(event.key === "ArrowDown" && playerY<windowheight)
    {
        playerY+=speed;
    }
    else if(event.key ==="ArrowUp" && playerY>0)
    {
        playerY-=speed;
    }

    circle.style.left = `${playerX}px`;
    circle.style.top = `${playerY}px`;
});