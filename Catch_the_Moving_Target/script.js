let x=50;
let y=50;
let speed = 10;

window.onload =()=>{
    movetotargetrandomly();
    console.log("working");
};
function movetotargetrandomly()
{
    const target = document.querySelector(".target");
    const randomx = Math.random() * (window.innerWidth-50);
    const randomy = Math.random()* (window.innerHeight-50);

    target.style.left = `${randomx}px`;
    target.style.top = `${randomy}px`;
    console.log("called");
}
document.addEventListener("keydown",function(e){
 
    const windowWidth = window.innerWidth - 100;
    const windowHeight = window.innerHeight - 100;
    const player = document.querySelector(".player");
    if(e.key ==="ArrowRight" && x<windowWidth)
    {
        x+=speed;
    }
    else if(e.key ==="ArrowLeft" && x>0)
    {
        x-=speed;
    }
    else if(e.key ==="ArrowDown" && y<windowHeight)
    {
        y+=speed;
    }
    else if (e.key === "ArrowUp" && y>0)
    {
        y-=speed;
    }

    player.style.left=`${x}px`;
    player.style.top = `${y}px`;
});



