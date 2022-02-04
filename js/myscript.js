// Chiede quanti chilometri deve fare l'utente
let quantiKm = parseFloat(prompt('Ciao, puoi dirmi quanti chilometri dista La tua destinazione'));
console.log(quantiKm);

// Età dell'utente.
if (isNaN(quantiKm)) {
  alert('we frate hai sbagliato, inserisci numero')
} else {
  let quantiAnni = parseFloat(prompt('Quanti anni hai?'));
  console.log(quantiAnni);

  if (isNaN(quantiAnni)) {
    alert('we frate hai sbagliato, inserisci numero')
  } else {
    // Prezzo del biglietto in base alla distanza
    let prezzoDelBiglietto = parseFloat(quantiKm * 0.21);
    console.log(prezzoDelBiglietto);

    //Sconti in base all'età.
    if (quantiAnni < 18) {
      //Prezzo per minorenni con sconto
      let minorenne = parseFloat(prezzoDelBiglietto * 0.80);
      console.log(minorenne);
    } else if(quantiAnni >= 65) {
      //Prezzo per anziani con sconto
      let anziano = parseFloat(prezzoDelBiglietto * 0.60);
      console.log(anziano);
    } else {
      //Prezzo per adulti
      let prezzoDelBiglietto = parseFloat(quantiKm * 0.21);
      console.log(prezzoDelBiglietto);
    }
  }
}



// if (isNaN(quantiKm)) {
//   alert('we frate hai sbagliato, inserisci numero')
// } else {
//   alert('bravo hai messo un numero')
// }
