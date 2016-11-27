var _ = require('lodash')
// sory by income
// take sum of .income and divide by objects.length
// filter and look for
// if .income > avg then return overperform
// else underperfom.

let freelanceIncome = function(incomeItem) {

  let average;
  let underperform;
  let overperform;

  incomeItem = _.sortBy(incomeItem, 'income');

  sum = _.reduce(incomeItem, function(sum, num){
    return sum + num.income;
  }, 0);

  average = sum / incomeItem.length;

  underperform = _.filter(incomeItem, function (num){
    return num.income <= average;
  });

  overperform = _.filter(incomeItem, function (num){
    return num.income > average;
  })

  return {
    average,
    underperform,
    overperform,
  };

};

module.exports = freelanceIncome;
