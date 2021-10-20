const data = require('../data/zoo_data');
// Se o objeto de opções tiver a propriedade name, retorna somente a pessoa correspondente;
// A propriedade name do objeto de opções também funciona usando o segundo nome;
// Se o objeto de opções tiver a propriedade id, retorna somente a pessoa correspondente;

// Sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias;
// Caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error.

// const expected = {
//   id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
//   fullName: 'Sharonda Spry',
//   species: [ 'otters', 'frogs' ],
//   locations: [ 'SE', 'SW' ],
// }; 
// { nome: Alice}

const { employees, species } = data;

const checkEntrance = (identify) => {
  const allEmpFName = employees.map((employee) => employee.firstName);
  const allEmpLName = employees.map((employee) => employee.lastName);
  const allEmpId = employees.map((employee) => employee.id);
  if (allEmpFName.includes(identify) || allEmpLName.includes(identify)
    || allEmpId.includes(identify)) {
    return true;
  }
  return false;
};

const getAnimals = (ids) => ids.map((id) => {
  const animal = species.find((specie) => specie.id === id);
  return animal.name;
});

const getLocations = (animals) => animals.map((animal) => species.find((specie) =>
  specie.name === animal).location);

const organizeInfo = () => employees.map((employee) => {
  const { firstName, responsibleFor, lastName, id } = employee;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getAnimals(responsibleFor),
    locations: getLocations(getAnimals(responsibleFor)),
  };
});

function getEmployeesCoverage(entrance) {
  if (!entrance) return organizeInfo();
  const identify = Object.values(entrance)[0];
  if (checkEntrance(identify) === false) {
    throw new Error('Informações inválidas');
  }
  const getEmployee = (info) => employees.find((employ) => {
    const { firstName, lastName, id } = employ;
    return (firstName === info || lastName === info || id === info);
  });
  const persona = getEmployee(identify);
  const { id, firstName, lastName, responsibleFor } = persona;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: getAnimals(responsibleFor),
    locations: getLocations(getAnimals(responsibleFor)),
  };
}

module.exports = getEmployeesCoverage;