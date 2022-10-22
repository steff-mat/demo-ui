const appIcons = document.querySelectorAll(".cube");
const appWindow = document.querySelector(".layer");

const openApp = function() {
    appWindow.classList.remove("hidden");
}

const closeApp = function() {
    appWindow.classList.add("hidden");
}

for (let i = 0; i < appIcons.length; i++) {
appIcons[i].addEventListener("click", openApp);
appWindow.addEventListener("click", closeApp);
}
