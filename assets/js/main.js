/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

tools:
const / let
prompt
calcolo percentuale con operatore di comparazione (> < =) in base all'età
if / else if / else
allert / log
*/

// Creo prompt dell'età da inserire
const eta = Number(prompt('Quanti anni hai?'))
console.log(eta);


// Creo prompt km che vorrai percorrere
const km = Number(prompt('Quanti km percorrerai?'))
console.log(km);



// Creo calcolo  della percentuale in base all'età
if (eta <= 17) {
    // Creo calcolo € in base ai km percorsi
    const percentuale = ((km * 0.21) - ((km * 0.21) * 20 / 100))
    const percentuale_decimale = percentuale.toFixed(2)
    console.log(percentuale_decimale);


} else if (eta >= 65) {
    // Creo calcolo € in base ai km percorsi
    const percentuale = ((km * 0.21) - ((km * 0.21) * 40 / 100))
    const percentuale_decimale = percentuale.toFixed(2)
    console.log(percentuale_decimale);

} else {
    const full_price = (km * 0.21)
    const full_price_decimale = full_price.toFixed(2)
    console.log(full_price_decimale);
}
