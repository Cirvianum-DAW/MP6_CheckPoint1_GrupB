const anyNaixement = () => {
  const any = Math.floor(Math.random() * (2024 - 1980) + 1980);
  return any;
};

const any = anyNaixement();

/**
 * Funció per endevinar l'any de naixement.
 * L'usuari té 3 oportunitats per endevinar l'any correcte.
 * Si l'usuari encerta, es mostra un missatge d'encert (prompt/alert)
 * Si l'usuari introdueix un any més petit, es mostra un missatge indicant que l'any és més petit.
 * Si l'usuari introdueix un any més gran, es mostra un missatge indicant que l'any és més gran.
 * Si l'usuari esgota les oportunitats sense encertar, es mostra un missatge d'error.
 */
const endevinarAny = () => {
  let endevina;
  let intents = 0;
  while (intents < 5) {
    endevina = parseInt(
      prompt("Endevina l'any de naixement entre 1980 i 2000")
    );
    if (endevina === any) {
      alert('Has encertat!');
      return;
    } else if (endevina < any) {
      alert('El teu nombre és més petit!');
    } else {
      alert('El teu nombre és més gran!');
    }
    intents++;
  }
  alert('Has esgotat les teves oportunitats!');
};
endevinarAny();
