function prikaziPregled() {
    let naslov = document.getElementById("naslov").value.trim();
    let tekst = document.getElementById("tekst").value.trim();
    let kategorija = document.querySelector(
        '#forma input[name="kategorija"]:checked',
    ).value;
    let greska = document.getElementById("greska");

    if (naslov === "" || tekst === "") {
        let poruka = "";
        if (naslov === "") poruka += "Naslov ne smije biti prazan. ";
        if (tekst === "") poruka += "Tekst obavijesti ne smije biti prazan.";
        greska.textContent = poruka;
        return;
    }
    greska.textContent = "";

    document.getElementById("pNaslov").textContent = naslov;
    document.getElementById("pTekst").textContent = tekst;
    let oznaka = document.getElementById("pKategorija");
    oznaka.textContent = kategorija;

    let pregled = document.getElementById("pregled");
    if (kategorija === "Hitno") {
        pregled.style.borderColor = "red";
        pregled.style.backgroundColor = "#ffe5e5";
        oznaka.style.backgroundColor = "red";
    } else {
        pregled.style.borderColor = "blue";
        pregled.style.backgroundColor = "#e5f0ff";
        oznaka.style.backgroundColor = "blue";
    }
}

function resetujFormu() {
    document.getElementById("naslov").value = "";
    document.getElementById("tekst").value = "";
    document.querySelector('#forma input[value="Hitno"]').checked = true;
    document.getElementById("greska").textContent = "";
}
