
const images = document.querySelectorAll(".img1 img");


const choosen = document.getElementById("choosen");
const choosenImg = document.getElementById("choosenimg");
const closeBtn = document.getElementById("closeBtn");


images.forEach((img) => {
  img.addEventListener("click", () => {
    choosen.style.display = "flex";
    choosenImg.src = img.src;
  });
});


closeBtn.addEventListener("click", () => {
  choosen.style.display = "none";
});


window.onclick = function (event) {
  if (event.target === choosen) {
    choosen.style.display = "none";
  }
};


