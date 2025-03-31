let allPaises = [];
var pais="https://restcountries.com/v3.1/alpha/";
async function buscarPais(value) {
 let reply = await fetch("https://restcountries.com/v3.1/all");

 let dadta = await reply.json();
 allPaises = dadta;
//  console.log(allPaises);
    render(allPaises);
}

function render(allPaises) {
    // console.log(allPaises[1]);
    document.querySelector("#qt").innerHTML = allPaises.length;
    document.querySelector(".all").innerHTML = "";
    for (let caunty of allPaises) {
        // console.log(caunty);
        // console.log(caunty.flags.png);
        let caixa = document.createElement("div");
        caixa.classList.add("caixa");
        caixa.innerHTML = `<img src="${caunty.flags.png}" alt="${caunty.flags.alt}">
            <samp>${caunty.name.common}</samp>`;

let bt = document.createElement("button");
bt.addEventListener("click", function () {
    window.localStorage.setItem("pais", caunty.cca2);
    window.location.href = "index2.html";
})

caixa.appendChild(bt);

        document.querySelector(".all").appendChild(caixa);
    }
}
function localSearch(input) {
const search=[];
const name = input.value.toLowerCase();
for (let caunty of allPaises) {
    if (caunty.translations.por.common.toLowerCase().startsWith(name)) {
        search.push(caunty);
    }
   }
   console.log(search)
   //allPaises = search;
render(search);
}
function filter(input) {
    //console.log(input.value);
    buscarPais(input.value);
}

buscarPais("all");