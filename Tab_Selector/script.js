const steps = document.getElementsByClassName("step");
const para = document.getElementsByClassName("paragraph");
const stepImage = document.getElementById('stepImage');
for (let i = 0; i < steps.length; i++) {
  steps[i].addEventListener("click", () => {
    for (let j = 0; j < para.length; j++) {
      para[j].style.display = "none";
    }
    if (steps[i].id === "step1") {
      document.getElementById("para1").style.display = "block";
      stepImage.src = "https://emarsys.com/app/uploads/2020/03/real-ai.jpg.webp";
    } else if (steps[i].id === "step2") {
      document.getElementById("para2").style.display = "block";
      stepImage.src = "https://www.vdi-wissensforum.de/fileadmin/_processed_/c/6/3840_1306_7b0e542f8e.webp";
    } else if (steps[i].id === "step3") {
      document.getElementById("para3").style.display = "block";
      stepImage.src = "https://investin.org/cdn/shop/articles/software-engineering-skills_resize_md.jpg?v=1634293058";
    }
  });
}
