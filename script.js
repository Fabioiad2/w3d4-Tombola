/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti

let bottoneEstrai = document.querySelector('#estrai')
let resetButton = document.querySelector('#reset')
let cronologiaParagraph = document.querySelector('#cronologia')

const EstraiNumeri = ()=>{
  let ultimoUscito = document.querySelector('#ultimo-numero')
  ultimoUscito.textContent = ""
  let valueUltimoUscito = Math.floor(Math.random() * 90)
  usciti.push(valueUltimoUscito)
  console.log(usciti)
  ultimoUscito.textContent += valueUltimoUscito
}

bottoneEstrai.addEventListener('click',()=>{
  EstraiNumeri()
  cronologia()
})


function reset(){
  usciti = []
  cronologia()
}

resetButton.addEventListener('click',()=>{
  reset()
  
})


function cronologia(){
  cronologiaParagraph.textContent = usciti 
}

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/
