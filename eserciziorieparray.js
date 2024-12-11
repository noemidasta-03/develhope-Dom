const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

studenti.forEach((studente) => {
  console.log(studente.nome);
});

const studenteConVotoSuperioreA90 = studenti.find(
  (studente) => studente.voto > 90
);
console.log(studenteConVotoSuperioreA90);

const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);
const mediaVoti = sommaVoti / studenti.length;
console.log(`La media dei voti è: ${mediaVoti}`);

const nomiInMaiuscolo = studenti.map((studente) => studente.nome.toUpperCase());
console.log(nomiInMaiuscolo);

const studentiConVotoSuperioreA85 = studenti.filter(
  (studente) => studente.voto > 85
);
console.log(studentiConVotoSuperioreA85);
