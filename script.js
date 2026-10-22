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
let tabelloneId = document.querySelector('#tabellone')

const EstraiNumeri = () => {
  if (usciti.length >= 90) {
    alert("Hai finito il tabellone!");
    return; // Ferma subito la funzione prima che entri nel do...while!
  }

  let ultimoUscito = document.querySelector('#ultimo-numero');
  let valueUltimoUscito;

  do {
    valueUltimoUscito = Math.floor(Math.random() * 90) + 1;
  } while (usciti.includes(valueUltimoUscito));

  usciti.push(valueUltimoUscito);
  ultimoUscito.textContent = valueUltimoUscito;
};

bottoneEstrai.addEventListener('click',()=>{
  EstraiNumeri()
  cronologia()
  createTabellone()
})


function reset(){
  usciti = []
  cronologia()
  createTabellone()
}

resetButton.addEventListener('click',()=>{
  reset()
  
})


function cronologia(){
  cronologiaParagraph.textContent = usciti.slice(0,10)
}

function createTabellone(){
  tabelloneId.textContent = ""
  for(let i = 1; i < 91; i++){
    let numero = document.createElement('button')
    numero.classList.add('numero')
    numero.textContent = i
    tabelloneId.appendChild(numero)
    console.log(i)
        
        usciti.forEach(u=>{
          if(u == i){
            console.log(u,"numero uscito")
            numero.classList.add("numerouscito");
          }
        })
      }
}



createTabellone()
/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/