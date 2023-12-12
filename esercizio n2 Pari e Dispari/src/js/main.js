//Pari e Dispari
//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generare un numero random (sempre da 1 a 5) per il computer
//Sommiamo i due numeri
//se la somma dei due numeri è pari allora vince il giocatore
//altrimenti vince il computer

//CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
let sceltaNumerogiocatore = parseInt(prompt('scrivi un numero da 1 a 5'));
//GENERO UN NUMERO RANDOM PER IL COMPUTER
let sceltaNumeroComputer = getRandomIntInclusive(1, 5);
let numero = console.log(sceltaNumeroComputer);
//SOMMO I DUE NUMERI
let sommaNumeri = sceltaNumerogiocatore + sceltaNumeroComputer;
//USO LA FUNZIONE PER GENERARE UN NUMERO CASUALE DEL COMPUTER CON MINIMO E MASSIMO
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//CREO L'IF PER VEDERE SE ESCE PARI O DISPARI
if (sommaNumeri % 2 == 0) {
    alert(sommaNumeri + ' è pari HAI VINTO');
    console.log(sommaNumeri + ' è pari HAI VINTO');
} else {
    alert(sommaNumeri + ' è dispari HA VINTO IL COMPUTER');
    console.log(sommaNumeri + ' è dispari HA VINTO IL COMPUTER');
}
