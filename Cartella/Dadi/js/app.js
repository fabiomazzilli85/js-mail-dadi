// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let user = "Me";
let computer = "Computer";

// Dichiaro due variabili "parlanti": da una parte c'è l'utente e dall'altra il computer.


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (6) + 1);
  }

// Con questa funzione (fonte: "W3Schools") il sistema genera un numero casuale compreso tra 1 (numero minimo) e 6 (numero massimo).

let numberNut = [1, 2, 3, 4, 5, 6];
let sommaNumber = 0;

// Questa è l'Array contentnti i valori che il dado può esprimere. Le ho dato il nome di "numberNut" Ho creato "sommaNumber" a cui ho assegnato un valore (servirà nel ciclo for).

for (let i = 0; i < 5; i++) { // 
    let randomIndex = Math.floor(Math.random() * numberNut.length); // Genera un indice casuale (Fonte: W3Schools)
    let randomNumber = numberNut[randomIndex]; // Ottieni il numero corrispondente all'indice casuale (Fonte: W3Schools)
    sommaNumber += randomNumber;
    console.log(randomNumber);
  }

  console.log("Somma:", sommaNumber);

  // Il sistema genera numeri casuali e li somma, stampandoli nella console del browser.
