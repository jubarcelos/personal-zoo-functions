const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
// o find retorna tudo, o some retorna true or false.

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:
// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const responsibleFor = employees.filter(({ managers }) => managers.includes(managerId));
  return responsibleFor.map((person) => `${person.firstName} ${person.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
