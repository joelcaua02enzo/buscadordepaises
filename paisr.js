let allPaises = "escript.js";
let caunty = localStorage.getItem("pais");
// console.log(caunty);
async function conteudopais(caunty){
    var pais= await fetch(`https://restcountries.com/v3.1/alpha/${caunty}`);
   var d = await pais.json();

   //console.log(d[0]);

   document.querySelector("#nome").innerHTML = d[0].name.common;
    document.querySelector("#capital").innerHTML = d[0].capital[0];
    document.querySelector("#populacao").innerHTML = d[0].population;
    document.querySelector("#area").innerHTML = d[0].area;
    document.querySelector("#regiao").innerHTML = d[0].region;
    document.querySelector("#subregiao").innerHTML = d[0].subregion;
    document.querySelector("#bandeira").src = d[0].flags.png;
    document.querySelector("#bandeira").alt = d[0].flags.alt;
    document.querySelector("#bandeira").style.width = "200px";
    document.querySelector("#bandeira").style.height = "100px";
    document.querySelector("#bandeira").style.borderRadius = "10px";
    document.querySelector("#bandeira").style.border = "2px solid black";
    document.querySelector("#bandeira").style.marginBottom = "10px";
    document.querySelector("#bandeira").style.marginTop = "10px";
    document.querySelector("#bandeira").style.boxShadow = "0 0 10px black";
    document.querySelector("#bandeira").style.padding = "10px";
    document.querySelector("#bandeira").style.backgroundColor = "white";
    document.querySelector("#bandeira").style.boxSizing = "border-box";
    document.querySelector("#mapa").href = d[0].maps.googleMaps;
}
conteudopais(caunty);