var _ = require('lodash')

var itemQuantities = function(items) {
  return _.sortBy(items, 'quantity').reverse()
}

module.exports = itemQuantities;
