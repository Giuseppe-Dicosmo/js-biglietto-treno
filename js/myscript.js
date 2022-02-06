// Chiede quanti chilometri deve fare l'utente
let quantiKm = parseFloat(prompt('Ciao, puoi dirmi quanti chilometri dista La tua destinazione'));
console.log(quantiKm);

if (isNaN(quantiKm)) {
  // Errore
  alert('We frate hai sbagliato, inserisci numero')
} else {
  // Chiede l'età dell'utente
  let quantiAnni = parseFloat(prompt('Quanti anni hai?'));
  console.log(quantiAnni);

  if (isNaN(quantiAnni)) {
    // Errore
    alert('we frate hai sbagliato, inserisci numero')
  } else {
    // Prezzo del biglietto in base ai kilometri percorsi
    let prezzoKm = quantiKm * 0.21;
    console.log(prezzoKm);

    // Sconti in base all'età.
    if (quantiAnni < 18) {
      //Prezzo per minorenni con sconto
      let minorenne = prezzoKm * 0.80;
      let prezzoDelBigliettoMinorenne = minorenne.toFixed(2);
      console.log(minorenne);
      console.log(prezzoDelBigliettoMinorenne);


      let prezzoHTMLElement = document.getElementById('prezzo');
      console.log(prezzoHTMLElement);

      prezzoHTMLElement.innerHTML += `
      Ecco il prezzo del tuo biglietto ${prezzoDelBigliettoMinorenne}€, grazie e buona giornata.
      `
    } else if(quantiAnni >= 65) {
      //Prezzo per anziani con sconto
      let anziano = prezzoKm * 0.60;
      let prezzoDelBigliettoAnziano = anziano.toFixed(2);
      console.log(anziano);
      console.log(prezzoDelBigliettoAnziano);


      let prezzoHTMLElement = document.getElementById('prezzo');
      console.log(prezzoHTMLElement);

      prezzoHTMLElement.innerHTML += `
      Ecco il prezzo del tuo biglietto ${prezzoDelBigliettoAnziano}€, grazie e buona giornata.
      `
    } else {
      //Prezzo per adulti
      let adulto = prezzoKm;
      let prezzoDelBigliettoAdulto = adulto.toFixed(2);
      console.log(adulto);
      console.log(prezzoDelBigliettoAdulto);


      let prezzoHTMLElement = document.getElementById('prezzo');
      console.log(prezzoHTMLElement);

      prezzoHTMLElement.innerHTML += `
      Ecco il prezzo del tuo biglietto ${prezzoDelBigliettoAdulto}€, grazie e buona giornata.
      `
    }
  }
}

// if (isNaN(quantiKm)) {
//   alert('we frate hai sbagliato, inserisci numero')
// } else {
//   alert('bravo hai messo un numero')
// }
