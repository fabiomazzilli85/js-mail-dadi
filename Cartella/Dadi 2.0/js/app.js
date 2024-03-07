let numerNut = [1, 2, 3, 4, 5, 6];
let user = "Me"; 
let computer = "Computer";
// Con le variabili sopraelencate ho specificato che ci sono due utenti (io e il computer) e che il dado può restutuire una classe di numeri limitata. 


let userScore = 0;
let computerScore = 0;
// La condizione di partenza è pari.


for (let i = 0; i <= 6; i++) {
  let diceRoll = Math.floor(Math.random() * numerNut.length);
  let currentNumber = numerNut[diceRoll];
  userScore += currentNumber; 
}
// Qui sono io a lanciare i dadi. Si noti "userScore += currentNumber". 


for (let i = 0; i <=6; i++) {
  let diceRoll = Math.floor(Math.random() * numerNut.length); 
  let currentNumber = numerNut[diceRoll];
  computerScore += currentNumber; 
}
// Qui, invece, è il computer a lanciare i dadi.


console.log("Punteggio del giocatore:", userScore);
console.log("Punteggio del computer:", computerScore);
// La console del browser dà i risultati. 


if (userScore > computerScore) {
  alert ("Hai vinto!");
} else if (userScore < computerScore) {
   alert ("Il computer ha vinto.");
} else {
  alert ("Pareggio!");
}
// Anziché mandare i risultati in console.log, ho preferito mandare un "alert", mi sembra più carino.  