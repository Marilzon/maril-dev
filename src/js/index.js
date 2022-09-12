const button = document.querySelector(".theme-btn")
const currentTheme = document.querySelector("#theme-style")

const dayIcon = document.querySelector(".day-icon")
const nightIcon = document.querySelector(".night-icon")

button.addEventListener("click", function() {
    if (currentTheme.getAttribute("href") == "src/css/light-theme.css") {
        currentTheme.href = "src/css/dark-theme.css"

    } else {
        currentTheme.href = "src/css/light-theme.css"
    }
})
