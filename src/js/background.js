const MAX_IMAGE_NUMBER = 10;
const IMAGE_PATH = "../../assets/images/";

document.addEventListener("DOMContentLoaded", () => {
  setInterval(setBackground, 6000);
});

function setBackground() {
  const introScreen = document.getElementById("screen__intro");

  const imageNumber = Math.floor(Math.random() * MAX_IMAGE_NUMBER) + 1;

  if (introScreen) {
    introScreen.classList.add("fade-out");

    setTimeout(() => {
      introScreen.style.backgroundImage = `url("${IMAGE_PATH}${imageNumber}.gif")`;
      introScreen.classList.remove("fade-out");
      introScreen.classList.add("fade-in");

      setTimeout(() => {
        introScreen.classList.remove("fade-in");
      }, 2000);
    }, 2000);
  }
}

setBackground();
