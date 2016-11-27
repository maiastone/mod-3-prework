'use strict';


var promise = Promise.reject(new Error('FAIL'));

promise.catch(function(err) {
  console.error(err.mesage)}
);
