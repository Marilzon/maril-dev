const MAX_IMAGE_NUMBER = 4;
const IMAGE_PATH =
  "https://cdn.jsdelivr.net/gh/Marilzon/maril-dev@master/src/assets/images/";

const images = [];

for (let i = 1; i <= MAX_IMAGE_NUMBER; i++) {
  const img = new Image();
  img.src = `${IMAGE_PATH}${i}-min.gif`;
  images.push(img);
}

document.addEventListener("DOMContentLoaded", () => {
  setBackground();

  setInterval(setBackground, 8000);
});

function setBackground () {
  const introScreen = document.getElementById("screen__intro");
  const imageNumber = Math.floor(Math.random() * MAX_IMAGE_NUMBER);
  introScreen.style.backgroundImage = `url("${images[imageNumber].src}")`;
}