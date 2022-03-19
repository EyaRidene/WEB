const para = document.querySelector("p");
const col = document.querySelector(".couleur");
const siz = document.querySelector(".size");
const pol = document.querySelector(".ktiba");
siz.addEventListener('input',() => {
    para.style.fontSize = siz.value+"px";
})

col.addEventListener('input',() => {
    para.style.color = col.value;
})

pol.addEventListener('input',() => {
    para.style.fontFamily= pol.value;
})


