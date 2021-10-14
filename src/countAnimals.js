const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Precisa concatenar o nome de todas as species e somar os residents delas

// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;

// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.

// construido com ajuda de Guilherme Augusto =)

function allSpecie(animal) {
  return species.reduce((acc, specieCount) => {
    acc[specieCount.name] = specieCount.residents.length;
    return acc;
  }, {});
}

function countAnimals(animal) {
  if (!animal) {
    return allSpecie();
  }
  const findSpecie = species.find((specie) => animal.specie === specie.name);
  const findResidents = findSpecie.residents;
  if (!animal.sex) {
    return findResidents.length;
  }
  return findResidents.filter((animalSex) => animal.sex === animalSex.sex).length;
}

module.exports = countAnimals;
