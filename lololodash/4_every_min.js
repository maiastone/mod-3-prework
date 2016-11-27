var _ = require('lodash');

var sortTemp = function (temp) {
  var result = {
    hot: [],
    warm: []
  };

  function checkTemp (temp) {
    return temp > 19;
  }

  _.forEach(temp, function (city, cityName) {
    if (_.every(city, checkTemp)) {
        result.hot.push(cityName);
    } else if (_.some(city, checkTemp)) {
        result.warm.push(cityName);
    }
  });

  return result;
};

module.exports = sortTemp;
