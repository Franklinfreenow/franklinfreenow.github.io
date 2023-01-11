const menuBar = document.getElementById("menubar");
const menu = document.getElementById("menu");

menuBar.addEventListener("click", () => {
    menu.classList.toggle("menu--on")
})