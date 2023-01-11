const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");
const section3 = document.getElementById("section-3");
const section4 = document.getElementById("section-4");

btn1.addEventListener("click", function(){
    section1.classList.add("first");
    section2.classList.remove("first");
    section3.classList.remove("first");
    section4.classList.remove("first");
});

btn2.addEventListener("click", function(){
    section1.classList.remove("first");
    section2.classList.add("first");
    section3.classList.remove("first");
    section4.classList.remove("first");
});

btn3.addEventListener("click", function(){
    section1.classList.remove("first");
    section2.classList.remove("first");
    section3.classList.add("first");
    section4.classList.remove("first");
});

btn4.addEventListener("click", function(){
    section1.classList.remove("first");
    section2.classList.remove("first");
    section3.classList.remove("first");
    section4.classList.add("first");
});