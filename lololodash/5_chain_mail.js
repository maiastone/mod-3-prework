var _ = require('lodash');


var wordModify = function(words) {
  return _.chain(words)
  .map(function(word) {
    return word + 'Chained';
  })
  .map(function(word){
    return word.toUpperCase();
  })
  .sortBy()
  .value();
};


module.exports = wordModify;
