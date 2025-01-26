let keycode = document.getElementById("keycode");
let key = document.getElementById("key");
let isbox = false;

if (!isbox) {
   key.style.display = "none";
    keycode.innerHTML = "Press any Keyboard Key";
}

document.addEventListener("keydown", function(e) {
    if (!isbox) {
        isbox = true;
        key.style.display = "flex"; 
    }

    keycode.innerText = `Key pressed: ${e.key === " " ? "Space" : e.key}`;
    key.innerText = `${e.keyCode}`;

    console.log(`Key pressed: ${e.key}`);
    console.log(`Key code: ${e.code}`);    
});


