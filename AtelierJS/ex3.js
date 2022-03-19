const b = document.querySelector("button");
const up = document.querySelector(".change");

b.addEventListener('click',() => {
    let poub = document.createElement("img");
    poub.src = "trash-fill.svg";
    poub.alt = "corbeille";
    let para=document.createElement("p");
    let nom = document.querySelector(".name").value;
    let cont = document.querySelector(".contient").value;
    const ajout = nom+" : "+cont+"  ";
    para.innerHTML = ajout;
    document.querySelector(".name").value="";
    document.querySelector(".contient").value="";
    para.style['overflowWrap']='break-word';
    para.style.border = "solid thin";
    para.style.padding="10px";
    up.appendChild(para);
    para.appendChild(poub);
})

up.addEventListener('click', (e)=>{
    up.removeChild(e.target.parentNode);
})








