// Desenvolupa aqui les funcions demanades

// Ex2.1 Ingressos

const institutCirvianum = {
  NIF: '12345678A',
  adreça: 'Carrer Autista March, s/n, 08570 Torelló',
  secretaria: 'Teresa Secretaria',
  ingressos: {
    subvencions: 75000,
    matricules: 10000,
    altres: 8000,
  },
};

// Ex2.2 Despeses fixes

const despesesFixes = {
  salaris: 45000,
  serveis: 22000,
  materialDidactic: 10000,
};

// Ex2.3 Despeses variables

const despesesVariables = [
  { concepte: 'materialOficina', quantitat: 2000 },
  { concepte: 'materialNeteja', quantitat: 1000 },
  { concepte: 'materialInformatic', quantitat: 3000 },
  { concepte: 'activitatsExtraescolars', quantitat: 5000 },
];

// Ex2.4 Ingressos totals

const sumIngressos = (institutCirvianum) => {
  const ingressos = Object.values(institutCirvianum.ingressos);
  return ingressos.reduce((acc, curr) => acc + curr);
};

const IngressosTotals = sumIngressos(institutCirvianum);

// També ho podem fer amb un for...in

// const sumIngressos = (institutCirvianum) => {
//     let total = 0;
//     for (const key in institutCirvianum.ingressos) {
//         total += institutCirvianum.ingressos[key];
//     }
//     return total;
// }

// Ex1.5 Despeses totals

function sumDespeses(despesesFixes, despesesVariables) {
  const despesesFixesValues = Object.values(despesesFixes);
  const despesesVariablesValues = despesesVariables.map(
    (despesa) => despesa.quantitat
  );
  const despeses = [...despesesFixesValues, ...despesesVariablesValues];
  return despeses.reduce((acc, curr) => acc + curr);
}

const despesesTotals = sumDespeses(despesesFixes, despesesVariables);

// Ex2.6 Estat Financer

function estatFinancer(IngressosTotals, despesesTotals) {
  //retornem la resta amb una precisio de 2 decimals i en format Number
  return Number((IngressosTotals - despesesTotals).toFixed(2));
}

const balançGlobal = estatFinancer(IngressosTotals, despesesTotals);

// Ex2.7 Funció per mostrar si hi ha superàvit o dèficit:
function superavit(balançGlobal) {
  const missatge = balançGlobal > 0 ? 'superàvit' : 'dèficit';
  return `L'Institut Cirvianum amb NIF ${institutCirvianum.NIF} té un ${missatge} de ${balançGlobal}€`;
}

// Ex2.8 Funció per mostrar si hi ha superàvit o dèficit amb alert:
function superavitAlert(balançGlobal) {
  const missatge = balançGlobal > 0 ? 'superàvit' : 'dèficit';
  alert(
    `L'Institut Cirvianum amb NIF ${
      institutCirvianum.NIF
    } té un ${missatge} de ${balançGlobal.toFixed(2)}€`
  );
}

// Ex2.9 Afegir despesa

function afegirDespesa(concepte, quantitat) {
  !quantitat ? (quantitat = Math.floor(Math.random() * 4000) + 1000) : null;
  console.log(quantitat);
  const despesa = { concepte, quantitat };
  despesesVariables.push(despesa);
  return despesesVariables;
}

// Ex1.10

function eliminarDespesa(concepte) {
  const despeses = despesesVariables.filter(
    (despesa) => despesa.concepte !== concepte
  );
  return despeses;
}

// Altra manera de fer-ho amb l'index

// function eliminarDespesa(concepte) {
//     const index = despesesVariables.findIndex(despesa => despesa.concepte === concepte);
//     despesesVariables.splice(index, 1);
//     return despesesVariables;
// }

// O amb un for...of

// function eliminarDespesa(concepte) {
//     for (const despesa of despesesVariables) {
//         if (despesa.concepte === concepte) {
//             const index = despesesVariables.indexOf(despesa);
//             despesesVariables.splice(index, 1);
//         }
//     }
//     return despesesVariables;
// }

module.exports = {
  institutCirvianum,
  sumIngressos,
  sumDespeses,
  estatFinancer,
  superavit,
  superavitAlert,
  afegirDespesa,
  eliminarDespesa,
};
