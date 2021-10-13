const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length !== undefined) {
    return data.species.filter((value) => ids.includes(value.id));
  }
  return ids;
}

module.exports = getSpeciesByIds;
