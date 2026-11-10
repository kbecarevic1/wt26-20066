window.onload = function () {
    resetuj();
};

function promijeni(dugme) {
    let stavka = dugme.parentNode;
    if (dugme.value === "Završi") {
        postaviStanje(stavka, true);
    } else {
        postaviStanje(stavka, false);
    }
    azurirajSazetak();
}

function postaviStanje(stavka, zavrseno) {
    let tekst = stavka.querySelector(".tekst");
    let status = stavka.querySelector(".status");
    let dugme = stavka.querySelector("input");

    if (zavrseno) {
        tekst.style.textDecoration = "line-through";
        tekst.style.color = "gray";
        status.innerHTML = "završeno";
        status.style.color = "green";
        dugme.value = "Vrati";
    } else {
        tekst.style.textDecoration = "none";
        tekst.style.color = "black";
        status.innerHTML = "nije završeno";
        status.style.color = "red";
        dugme.value = "Završi";
    }
}

function azurirajSazetak() {
    let stavke = document.querySelectorAll("#lista li");
    let brojZavrsenih = 0;
    for (let i = 0; i < stavke.length; i++) {
        if (stavke[i].querySelector(".status").innerHTML === "završeno") {
            brojZavrsenih++;
        }
    }
    document.getElementById("sazetak").textContent =
        "Završeno: " + brojZavrsenih + " / " + stavke.length;
}

function resetuj() {
    let stavke = document.querySelectorAll("#lista li");
    for (let i = 0; i < stavke.length; i++) {
        postaviStanje(stavke[i], false);
    }
    azurirajSazetak();
}
