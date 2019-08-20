const moduleOne = require('./module-one');               // returns our export objects.

console.log(moduleOne);

console.log(moduleOne.square(2));

// if we want to import only one functionality
// import just square function

const sq = require('./module-one').square;

console.log(sq(3));

console.log(module.exports);


