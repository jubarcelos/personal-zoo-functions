const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;
// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employ) => employ.id === id);
  const specie = employee.responsibleFor[0];
  const specieDetails = species.find((animal) => specie === animal.id);

  const { residents } = specieDetails;
  const speciesAge = residents.map((resident) => resident.age);
  const oldAge = Math.max(...speciesAge);
  const oldAnimal = residents.find((animal) => animal.age === oldAge);

  const { name, sex, age } = oldAnimal;
  return [name, sex, age];
}
module.exports = getOldestFromFirstSpecies;
