var _ = require('lodash');


var orderTotals = function (orders) {
  var orderArray = [];
  total = 0;
  orders =  _.groupBy(orders, 'article');
  _.forEach(orders, function (item, key) {
  key = parseInt(key);
  total = 0;
  if (item.length === 1) {
    total = item[0].quantity;
  } else {
  total = _.reduce(item, function(sum, item) {
    return sum + item.quantity;
  }, 0);
}
  orderArray.push({
    article: key,
    total_orders: total
  });
});
  orderArray = _.sortBy(orderArray, 'total_orders').reverse();
  return orderArray;
};

module.exports = orderTotals;
