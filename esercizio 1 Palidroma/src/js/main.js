//Palidroma
//Chiedere all'utente di inserire una parola
//VEDERE SE LA PAROLA INSERITA DALL'UTENTE E' PALINDROMA
//SCOMPORRE LA PAROLA
//INVERTIRE LE LETTERE
//RINCOMPORRE LA PAROLA
//SE E' PALINDROMA DICHIARARE CHE QUESTA PAROLA E' PALINDROMA
// ALTRIMENTI NON E' PALINDROMA
let parola = prompt('Inserisci parola');
function reverseString(string) {
    // Step 1. Uso il metodo split() per restituire un nuovo array
    let splitString = string.split('');
    // Step 2. Uso il metodo reverse() per invertire l'array appena creato
    let reverseArrey = splitString.reverse();
    // Step 3. Uso il metodo join() per unire tutti gli elementi della stringa in un array
    let joinArray = reverseArrey.join('');
    if (parola == joinArray) {
        return parola + ' è palindroma';
    } else {
        return parola + ' non è palindroma';
    }
}
reverseString(parola);
console.log(reverseString(parola));
