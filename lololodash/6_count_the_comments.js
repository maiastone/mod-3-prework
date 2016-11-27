var _ = require('lodash');

var commentSort = function(comments) {
  return _.chain(comments)
  .groupBy('username')
  .map(function(item, name){
    return {username: name, commentCount: _.size(item)};
  })
  .sortBy(function(counted){
    return -counted['commentCount'];
  });
};


module.exports = commentSort;
