// l'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore
const numberOne = prompt("Inserisci il primo numero");
const numberTwo = prompt("Inserisci il secondo numero");

if (numberOne > numberTwo) {
    console.log(numberOne)
} else if (numberTwo > numberOne) {
    console.log(numberTwo)
} else {
    console.log("I numeri sono uguali")
}


