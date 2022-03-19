let s="1";
while (s=="1") {
    let m = prompt("donner un niveau de difficulter(1:difficile,2:moyen,3:facile)");
    m = Number(m);
    const x = Math.floor(Math.random() * 10);

    let flag = true;
    for (let i = 0; i < m && flag; i++) {
        let c = prompt("Give a number : ");
        c = Number(c);
        if (c == x) {
            alert("You win yay !");
            flag = 0;
        }
    }
    if (flag)
        alert("you lose");
    s = prompt("voulez vous rejouer? (1:oui ou 2:non)");
}

