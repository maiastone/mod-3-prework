var _ = require('lodash')

var activeFilter = function(users) {
  return _.filter(users, {active: true});
};

module.exports = activeFilter;
