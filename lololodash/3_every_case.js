var _ = require('lodash')

var addSize = function(collection) {
  return _.forEach(collection, function(city) {
    if (city.population > 1) {
      city.size = 'big';
    } else if (city.population > .5) {
      city.size = 'med';
    } else {
      city.size = 'small'
    }
  })
}


module.exports = addSize;
