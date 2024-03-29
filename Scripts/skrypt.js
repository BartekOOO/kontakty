


var przycisk = document.getElementById("przycisk");
var liczbaPorzadkowa = 1;

przycisk.addEventListener('click', function () {
    var tabela = document.getElementById("tabelka");

    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    var wiek = document.getElementById("wiek").value
    var data = document.getElementById("data").value
    var grupa = document.getElementById("grupa").value;
    var plec = document.querySelector("input[name='plec']:checked").value;

    var tr = document.createElement("tr");

    var li = document.createElement("td");
    var im = document.createElement("td");
    var na = document.createElement("td");
    var em = document.createElement("td");
    var wi = document.createElement("td");
    var da = document.createElement("td");
    var gr = document.createElement("td");
    var pl = document.createElement("td");


    if(grupa=="Rodzina")
    {
        gr.className = "rodzina"
    }
    else if(grupa=="Przyjaciele")
    {
        gr.className = "przyjaciele";
    }

    li.textContent = liczbaPorzadkowa;
    im.textContent = imie;
    na.textContent = nazwisko;
    em.textContent = email;
    wi.textContent = wiek;
    da.textContent = data;
    gr.textContent = grupa;
    pl.textContent = plec;

    tr.appendChild(li);
    tr.appendChild(im);
    tr.appendChild(na);
    tr.appendChild(em);
    tr.appendChild(wi);
    tr.appendChild(da);
    tr.appendChild(pl);
    tr.appendChild(gr);


    zwierzak = document.getElementById("tygrys");
    zwierzak.className = "zwierze";


    tabela.appendChild(tr);

  


    liczbaPorzadkowa++;

});