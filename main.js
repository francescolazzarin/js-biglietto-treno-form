

let nomePassegero = document.getElementById('nome')
let kmDaPercorrere = document.getElementById('km')
let fasciaEta = document.getElementById('età')
let stampaBiglietto = document.getElementById('genera')
let nomeCognome = document.getElementById('nomeCognome')
let offerta = document.getElementById('offerta')
let codicecp = document.getElementById('codicecp')
let costoBiglietto = document.getElementById('costoBiglietto')
let carrozza = document.getElementById('carrozza')
let annulla=document.getElementById('annulla')
const titoloStampa = document.querySelector('h2')
const stampaHtml = document.getElementById('stampa')

const costo = 0.21
const scontoUnder = 20
const scontoOver = 40

stampaBiglietto.addEventListener('click', function () {
    const nomePassegeroValue = nomePassegero.value
    const fasciaEtaValue = fasciaEta.value
    const kmDaPercorrereValue = parseFloat(kmDaPercorrere.value)

    if (isNaN(kmDaPercorrereValue) || kmDaPercorrereValue <= 0) {
       return alert("Inserisci un valore valido per i chilometri.")
    }

    
    titoloStampa.classList.remove('d-none')

   
    stampaHtml.classList.remove('d-none')

    const dettagli = document.createElement('h2')
    dettagli.innerText = 'Dettaglio passeggeri'
    stampaHtml.prepend(dettagli)

    nomeCognome.innerHTML += `<p>${nomePassegeroValue}</p>`
    offerta.innerHTML +=`<p>${fasciaEtaValue}</p>`
    carrozza.innerHTML+=`<p>${randomNumber(1,10)}</p>`
    codicecp.innerHTML+=`<p>${(randomNumber(1, 1000))}</p>`
    costoBiglietto.innerHTML+=`<p>${(calcolo().toFixed(2))+"€"}</p>`            
});

function calcolo() {
    let risultato = 0;
    const kmValue = parseFloat(kmDaPercorrere.value);

    if (fasciaEta.value === 'minorenne') {
        risultato = kmValue * costo - (kmValue * costo * (scontoUnder / 100))
    } else if (fasciaEta.value === 'over65') {
        risultato = kmValue * costo - (kmValue * costo * (scontoOver / 100))
    } else {
        risultato = kmValue * costo
    }

    return risultato
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
annulla.addEventListener('click', function(){
    nomePassegero.value = ''
    fasciaEta.value = ''
    kmDaPercorrere.value = ''
})