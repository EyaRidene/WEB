const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
list1.addEventListener('click',() => {
    list1.style['color']='#'+(Math.random()*0xFFFFFF<<0).toString(16);
})
list2.addEventListener('click',() => {
    list2.style['color']='#'+(Math.random()*0xFFFFFF<<0).toString(16);
})
list3.addEventListener('click',() => {
    list3.style['color']='#'+(Math.random()*0xFFFFFF<<0).toString(16);
})