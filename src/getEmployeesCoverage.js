const data = require('../data/zoo_data');
// name: O nome ou sobrenome da pessoa a ser buscada
// id: O id da pessoa a ser buscada
// Ao ser chamada sem argumentos, deverá retornar um array com a cobertura de todas as pessoas funcionárias:
// Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "Informações inválidas". Exemplo:

// throw new Error('Informações inválidas');

// Observações técnicas

// Ao receber o objeto de opções com a propriedade name, procura a pessoa funcionária correspondente;
// A opção name deverá aceitar nome e sobrenome para realizar a busca;
// Ao chamar a função sem argumentos ela deve retornar um array com a cobertura de todas as pessoas funcionárias.
// O que será avaliado

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

const { employees, species } = data;
const { name, location } = species;

const checkEntrance = (entrance) => {
  const allEmpFName = employees.map((employee) => employee.firstName);
  const allEmpLName = employees.map((employee) => employee.lastName);
  const allEmpId = employees.map((employee) => employee.id);
  if ( allEmpFName.includes(entrance) || allEmpLName.includes(entrance) || allEmpId.includes(entrance)) {
    return true;
  }
  throw new Error('Informações inválidas');
}

// const checkEntrance = (entrance) => {
//   const { firstName, lastName, id } = employees;
//   return (firstName === entrance || lastName === entrance || id === entrance);
// };
// console.log(checkEntrance('Nelson'));

const getEmployInfo = (employ) => {
  const nameFirst = employees.find((func) => func.firstName === employ);
  const nameLast = employees.find((func) => func.lastName === employ);
  const EmployId = employees.find((func) => func.id === employ);
  
  const fullName = `${firstName} ${lastName}`;

  const { firstName, responsibleFor,  lastName, id} = employees;

  return {
    id,
    fullName,
    species: ,
    locations: ,
} 

const allAnimals = species.map((specie) => specie.name);

// function getEmployeesCoverage(...employ) {
//   if (!...employ) {
  checkEntrance
//   }
  
//   if (!employ) {
//     employees.forEach((id) => {

//     }
//     return 'any';
//   }
//   if ('firstName' in employ) {
//     return {};
//   }
// }

// module.exports = getEmployeesCoverage;