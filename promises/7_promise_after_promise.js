'use strict';

var firstPromise = first();

var secondPromise = firstPromise.then(function(secret){
  return second(secret);
});

secondPromise.then(console.log);
