const textarea = document.querySelector(".textarea");
const totalcount = document.querySelector(".totalcount");
const remaincount = document.querySelector(".remaincount");

textarea.addEventListener("input",function(){
    const currentxt = textarea.value;
    totalcount.textContent = currentxt.length;
    const remaing = 50 - currentxt.length;
    remaincount.textContent = remaing;
});