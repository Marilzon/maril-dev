const MAX_IMAGE_NUMBER = 9;
const IMAGE_PATH =
  "https://cdn.jsdelivr.net/gh/Marilzon/maril-dev@master/src/assets/images/";

document.addEventListener("DOMContentLoaded", () => {
  setBackground();

  setInterval(setBackground, 6000);
});

function setBackground () {
  const introScreen = document.getElementById("screen__intro");
  const imageNumber = Math.floor(Math.random() * MAX_IMAGE_NUMBER) + 1;
  return introScreen.style.backgroundImage = `url("${IMAGE_PATH}${imageNumber}-min.gif")`;
}
