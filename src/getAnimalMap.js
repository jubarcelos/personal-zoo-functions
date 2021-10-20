/* eslint-disable no-param-reassign */
const data = require('../data/zoo_data');

const { species } = data;
// Consegui entender a lógica que a colega Fumagalli fez, editei algumas facilidades que inclusive vou sugerir no CR dela.

// A função verifica as options passadas como parametro e realiza o sort ou filtro necessários.
const allResidentNames = (animal, options) => {
  const getSpecie = species.find(({ name }) => name === animal);
  const { residents } = getSpecie;
  // animal é parâmetro, posso usar entre [] para entrada dinâmica nas variáveis.
  const allSpecieResidents = {
    [animal]: residents.map(({ name }) => name),
  };
  // avaliação das options:
  const { sex, sorted } = options;
  if (sex) {
    const allResidentsBySex = residents.filter((resident) => resident.sex === sex);
    allSpecieResidents[animal] = allResidentsBySex.map(({ name }) => name);
  }
  if (sorted) {
    allSpecieResidents[animal].sort();
  }
  return allSpecieResidents;
};

const insertAnimals = (objWithNames, options) => {
  const { NE, NW, SE, SW } = objWithNames;
  // recebe um objeto com o nome de todos os residentes, classificados por região.
  objWithNames.NE = NE.map((animal) => allResidentNames(animal, options));
  objWithNames.NW = NW.map((animal) => allResidentNames(animal, options));
  objWithNames.SE = SE.map((animal) => allResidentNames(animal, options));
  objWithNames.SW = SW.map((animal) => allResidentNames(animal, options));
  // callback allResidentNames verifica as options passada como parâmetro.
  // tem como fazer um forEach e otimizar?
};

function getAnimalMap(options) {
  // resposta padrão só com o nome dos animais por região.
  const answerNames = {
    NE: species.filter(({ location }) => location === 'NE').map(({ name }) => name),
    NW: species.filter(({ location }) => location === 'NW').map(({ name }) => name),
    SE: species.filter(({ location }) => location === 'SE').map(({ name }) => name),
    SW: species.filter(({ location }) => location === 'SW').map(({ name }) => name),
  };

  if (!options || !options.includeNames) {
    // opção definida na questão: includeNames e sem parâmetro entrega só os nomes, por região.
    return answerNames;
  }
  // callback verifica options de exibição passada por parametro (sexo, sorted, includeNames).
  insertAnimals(answerNames, options);
  return answerNames;
}
module.exports = getAnimalMap;
