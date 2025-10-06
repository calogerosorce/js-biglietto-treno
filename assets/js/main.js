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
// Creo calcolo € in base ai km percorsi