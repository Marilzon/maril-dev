const MAX_IMAGE_NUMBER = 13;
const IMAGE_PATH =
  "https://cdn.jsdelivr.net/gh/Marilzon/maril-dev@master/src/assets/images/";

document.addEventListener("DOMContentLoaded", () => {
  setBackground();

  setInterval(setBackground, 6000);
});

function setBackground() {
  const introScreen = document.getElementById("screen__intro");
  const imageNumber = Math.floor(Math.random() * MAX_IMAGE_NUMBER) + 1;
  introScreen.style.backgroundImage = `url("${IMAGE_PATH}${imageNumber}-min.gif")`;

  if (introScreen) {
    return introScreen.classList.add("fade-out");
  }

  return;
}
