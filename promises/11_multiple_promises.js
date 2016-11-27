'use strict';

function all(promise1, promise2) {
  return new Promise(function(fulfill, reject) {
    var counter = 0;
    var array = [];

    promise1.then(function(val){
      array[0] = val;
      counter ++;

      if (counter >= 2) {
        fulfill(array);
      }
    });

    promise2.then(function(val){
      array[1] = val;
      counter ++;

      if (counter >= 2) {
        fulfill(array);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);
