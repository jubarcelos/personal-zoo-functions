const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.
// Retorna booleano.

function getAnimalsOlderThan(animal, age) {
  // cria a variável e armazena todos os dados de cada animal daquela espécie.
  const animalsData = species.find((specie) => specie.name === animal).residents;
  return animalsData.every((animalResident) => animalResident.age >= age);
}

module.exports = getAnimalsOlderThan;
