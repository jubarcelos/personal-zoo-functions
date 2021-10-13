// function getEmployeeByName(employeeName) {
//   const foundEmployee = employees.find((employee) => {
//     const foundFirstName = employee.firstName;
//     const foundLastName = employee.lastName;
//     return (employeeName === foundFirstName) || (employeeName === foundLastName);
//   });
//   console.log(foundEmployee);
//   return (foundEmployee !== undefined) ? foundEmployee : {};
// }

const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

// Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas
// é !diferente ? consideração (senão) : consideração

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const firstName = employees.find((func) => func.firstName === employeeName);
  const lastName = employees.find((func) => func.lastName === employeeName);
  if (firstName) {
    return firstName;
  }
  if (lastName) {
    return lastName;
  }
}
module.exports = getEmployeeByName;
