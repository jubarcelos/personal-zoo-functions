// Sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis;
// Com parâmetros que não sejam nem um animal e nem um dia, retorna os horários para cada dia e quais animais estarão disponíveis;
// Se um único dia for passado, retorna os horários para aquele dia e quais animais estarão disponíveis;
// Se o nome de um animal for passado, deverá retornar um array com os dias em que ele estará em exibição.

const data = require('../data/zoo_data');

const { hours, species } = data;
const weekdays = Object.keys(hours);

function getAnimalAvailableByDay(day) {
  return species.filter((specie) => specie.availability.includes(day))
    .map((animal) => animal.name);
}

const getDay = ((day) => {
  const { open, close } = hours[day];
  if (day !== 'Monday') {
    return {
      [day]: {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalAvailableByDay(day),
      },
    };
  }

  return {
    [day]: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
});

function getSchedule(scheduleTarget) {
  // 'sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis'
  const allDays = [];
  if (!scheduleTarget) {
    weekdays.forEach((value) => allDays.push(getDay(value)));
    return allDays;
  }
  // const allAnimals = species.map((specie) => specie.name);
  // if (allAnimals.includes(scheduleTarget)) {
  //   const checkAnimal = species.find((animal) => animal.name === scheduleTarget);
  //   const { availability } = checkAnimal; // Array with weekdays of specific animal
  //   return availability;
  // }
  // const findDay = weekdays.find((day) => day === scheduleTarget);
  // return getDay(findDay);
}
console.log(getSchedule());
module.exports = getSchedule;
