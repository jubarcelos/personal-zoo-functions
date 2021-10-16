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

const getAllDays = (() => {
  const schedule = {};
  weekdays.forEach((value) => {
    if (value !== 'Monday') {
      const { open, close } = hours[value];
      schedule[value] = {
        officeHour: `Open from ${open}am until ${close}pm`,
        exhibition: getAnimalAvailableByDay(value),
      };
    } else {
      schedule.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return schedule;
});

function getSchedule(scheduleTarget) {
  const allAnimals = species.map((specie) => specie.name);
  const findDay = weekdays.find((day) => day === scheduleTarget);

  if (!scheduleTarget) {
    return getAllDays();
  }
  if (allAnimals.includes(scheduleTarget)) {
    const checkAnimal = species.find((animal) => animal.name === scheduleTarget);
    const { availability } = checkAnimal; // Array with weekdays of specific animal
    return availability;
  }
  if (weekdays.includes(scheduleTarget)) {
    return getDay(findDay);
  }
  return getAllDays();
}
module.exports = getSchedule;
