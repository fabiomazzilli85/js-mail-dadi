const emailDataBase = ["fabio@mail.com", "luca@mail.com", "sergio@mail.com", "diego@mail.com,"];
// Array contentente quattro indirizzi email.

emailDataBase.push ("martin@mail.com", "scorsese@mail.com", "woody@mail.com");
// All'Array ho aggiunto tre indirizzi mail.

console.log(emailDataBase);
// Visualizzo l'elenco completo e aggiornato delle email presenti nel nostro DataBase.

function verificaEmail() {
  const emailUser = document.getElementById("email").value; //Collego la const con l'id "email"
  const emailValidation = emailDataBase.includes(emailUser); //Creo la const "emailValidation" e con la funzione "includes" (grazie Chat GPT) il sistema verifica se l'email dell'utente è presente nel nostro DataBase.    

  const messaggioDiv = document.getElementById("messaggio");
  
  if (emailValidation) {
    messaggioDiv.innerText = "OK. Il tuo indirizzo è presente nel nostro DataBase";
    // Il messaggio è mandato a schermo sul browser.
    console.log(messaggioDiv)
    // Il messaggi è mandato a schermo nella console del browser. 

    
  } else {
    messaggioDiv.innerText = "Siamo spiacenti. Il tuo indirizzo email non è presente nel nostro DataBase";
    console.log(messaggioDiv)
    // Il messaggi è mandato a schermo nella console del browser. 
  }
}