const data = require('../data/zoo_data');
const species = require('../data/zoo_data');
// const options = { includeNames: true, sorted: true, sex: female };

const AnimalsTypeSelect = (animal, options) => {
  const { sex, sorted } = options;
  const { residents } = species.find(({ name }) => name === animal);
  const allResidents = {
    [animal]: residents.map(({ name }) => name),
  };
  if (sex) {
    const allAnimalsSameSex = residents.filter((resident) => resident.sex === sex);
    allResidents[animal] = allAnimalsSameSex.map(({ name }) => name);
  }
  if (sorted) {
    allResidents[animal].sort();
  }
  return allResidents;
};

// const insertAnimals = (objPadrao, options) => {
//   objPadrao.NE = objPadrao.NE.map((animal) => AnimalsTypeSelect(animal, options));
//   objPadrao.NW = objPadrao.NW.map((animal) => AnimalsTypeSelect(animal, options));
//   objPadrao.SE = objPadrao.SE.map((animal) => AnimalsTypeSelect(animal, options));
//   objPadrao.SW = objPadrao.SW.map((animal) => AnimalsTypeSelect(animal, options));
// }

// function getAnimalMap(options) {
//   const objPadrao = {
//     NE: data.species.filter(({ location }) => location === 'NE').map(({ name }) => name),
//     NW: data.species.filter(({ location }) => location === 'NW').map(({ name }) => name),
//     SE: data.species.filter(({ location }) => location === 'SE').map(({ name }) => name),
//     SW: data.species.filter(({ location }) => location === 'SW').map(({ name }) => name),
//   };
  if (!options || !options.includeNames) {
    return objPadrao;
  }
  insertAnimals(objPadrao, options);
  return objPadrao;
}
module.exports = getAnimalMap;
