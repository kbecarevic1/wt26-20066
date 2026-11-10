window.onload = function () {
    azurirajZbir();
};

function dodaj() {
    let naziv = document.getElementById("naziv").value.trim();
    let iznosTekst = document.getElementById("iznos").value.trim();
    let iznos = Number(iznosTekst);
    let greska = document.getElementById("greska");

    if (naziv === "") {
        greska.textContent = "Naziv ne smije biti prazan.";
        return;
    }
    if (iznosTekst === "" || !isFinite(iznos)) {
        greska.textContent = "Iznos mora biti broj (npr. 12.50).";
        return;
    }
    if (iznos < 0) {
        greska.textContent = "Iznos ne smije biti negativan.";
        return;
    }
    greska.textContent = "";

    let tabela = document.getElementById("tabela");
    let red = tabela.insertRow(tabela.rows.length - 1);
    red.insertCell(0).textContent = naziv;
    red.insertCell(1).textContent = iznos.toFixed(2);

    azurirajZbir();

    document.getElementById("naziv").value = "";
    document.getElementById("iznos").value = "";
}

function azurirajZbir() {
    let tabela = document.getElementById("tabela");
    let zbir = 0;
    for (let i = 1; i < tabela.rows.length - 1; i++) {
        zbir += Number(tabela.rows[i].cells[1].textContent);
    }
    document.getElementById("zbir").textContent = zbir.toFixed(2);
    document.getElementById("brojStavki").textContent =
        "Broj stavki: " + (tabela.rows.length - 2);
}
