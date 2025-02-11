const circle = document.querySelector("div"); 
let x = 50, y = 50; 

document.addEventListener("keydown",function(event){
    const speed=30;
    const windowwidth = window.innerWidth-50;
    const windowheight = window.innerHeight-50;

    if(event.key ==="ArrowRight" && x<windowwidth)
    {
        x+=speed;
    }
    else if (event.key ==="ArrowLeft" && x>0)
    {
        x-=speed;
    }
    else if(event.key === "ArrowDown" && y<windowheight)
    {
        y+=speed;
    }
    else if(event.key ==="ArrowUp" && y>0)
    {
        y-=speed;
    }

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
});