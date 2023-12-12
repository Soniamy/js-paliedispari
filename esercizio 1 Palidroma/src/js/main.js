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
    let splitString = string.split('');
    let reverseArrey = splitString.reverse();
    let joinArray = reverseArrey.join('');
    if (parola == joinArray) {
        return parola + ' è palindroma';
    } else {
        return parola + ' non è palindroma';
    }
}
reverseString(parola);
console.log(reverseString(parola));
