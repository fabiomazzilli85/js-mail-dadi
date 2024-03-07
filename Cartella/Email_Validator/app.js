const emailDataBase = ["fabio@mail.com", "luca@mail.com", "sergio@mail.com", "diego@mail.com"];
// Array contentente quattro indirizzi email.

emailDataBase.push("martin@mail.com", "scorsese@mail.com", "woody@mail.com");
// All'Array ho aggiunto tre indirizzi mail.

console.log(emailDataBase);
// Visualizzo l'elenco completo e aggiornato delle email presenti nel nostro DataBase.

function verificaEmail() {
  const emailUser = document.getElementById("email").value; // Ottengo l'indirizzo email dall'elemento con id "email"
  
  if (emailDataBase.includes(emailUser)) {
    console.log("Le email corrispondono");
  } else {
    console.log("Le email non corrispondono");
  }
}