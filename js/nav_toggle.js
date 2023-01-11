const nav = document.getElementById("nav");
const menuOn = document.getElementById("menu-on");
const menuOff = document.getElementById("menu-off");

export function navToggleOn() {
   return menuOn.addEventListener("click", () => {
    nav.classList.toggle("nav-toggle");
  });
}

export function navToggleOff() {
    return menuOff.addEventListener("click", () => {
     nav.classList.remove("nav-toggle")
   });
 }


