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
const eta1 = Number(prompt('Quanti anni hai?'))
const eta2 = Number(prompt('Quanti anni hai?'))
console.log(eta1);
console.log(eta2);

// Creo prompt km che vorrai percorre
const km1 = Number(prompt('Quanti km percorrerai?'))
const km2 = Number(prompt('Quanti km percorrerai?'))
console.log(km1);
console.log(km2);


// Creo calcolo  della percentuale in base all'età
if (eta1 <= 17) {
    // Creo calcolo € in base ai km percorsi
    const percentuale1 = ((km1 * 0.21) - ((km1 * 0.21) * 20 / 100))
    const percentuale1_decimale = percentuale1.toFixed(2)
    console.log(percentuale1_decimale);


} else if (eta2 >= 65) {
    // Creo calcolo € in base ai km percorsi
    const percentuale2 = ((km1 * 0.21) - ((km1 * 0.21) * 40 / 100))
    const percentuale2_decimale = percentuale2.toFixed(2)
    console.log(percentuale2_decimale);

} else {
    const full_price = (km1 * 0.21)
    const full_price1_decimale = full_price.toFixed(2)
    console.log(full_price1_decimale);
}



if (eta2 <= 17) {
    // Creo calcolo € in base ai km percorsi
    const percentuale1 = ((km2 * 0.21) - ((km2 * 0.21) * 20 / 100))
    const percentuale1_decimale = percentuale1.toFixed(2)
    console.log(percentuale1_decimale);

} else if (eta2 >= 65) {
    // Creo calcolo € in base ai km percorsi
    const percentuale2 = ((km2 * 0.21) - ((km2 * 0.21) * 40 / 100))
    const percentuale2_decimale = percentuale2.toFixed(2)
    console.log(percentuale2_decimale);

} else {
    const full_price = (km1 * 0.21)
    const full_price1_decimale = full_price.toFixed(2)
    console.log(full_price1_decimale);
}