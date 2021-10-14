const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
// REQUISITOS:
// Ao receber um array de visitantes, retorna um objeto com a contagem;
// Retorna 0 se nenhum argumento for passado;
// Retorna 0 se um objeto vazio for passado;
// Retorna o preço total a ser cobrado dado o array de pessoas.

function countEntrants(entrants) {
  // Ela deverá retornar um objeto com a contagem com os seguintes critérios de classificação: { child: 3, adult: 2, senior: 1 }
  const child = entrants.filter((personAge) => personAge.age < 18).length;
  const adult = entrants.filter((personAge) => personAge.age >= 18 && personAge.age < 50).length;
  const senior = entrants.filter((personAge) => personAge.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length < 1) return 0;
  const totalPerson = countEntrants(entrants);
  // Recebe array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado.
  const { child, adult, senior } = totalPerson;
  const { prices } = data;
  const totalToPay = ((child * prices.child) + (adult * prices.adult) + (senior * prices.senior));
  return totalToPay;
}

module.exports = { calculateEntry, countEntrants };
