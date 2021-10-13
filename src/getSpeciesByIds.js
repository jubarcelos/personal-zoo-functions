const data = require('../data/zoo_data');

// function getSpeciesByIds(ids) {
//   if (ids.length === 0) {
//     console.log(ids);
//     return data.species.filter((value) => !ids.includes(value.id));
//   }
//   console.log(data.species.filter((value) => ids.includes(value.id)));
//   return data.species.filter((value) => ids.includes(value.id));
// }
// getSpeciesByIds();

// module.exports = getSpeciesByIds;

function filterIds(ids) {
  return data.species.filter((value) => ids.includes(value.id));
}

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  if (ids.length === 1) {
    return [data.species.find((specie) => ids.includes(specie.id))];
  }

  if (ids.length > 1) return filterIds(ids);
}
