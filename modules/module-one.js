const calc = {};

calc.add = function(a,b){
    return a+b ;
}

function square(n){
    console.log(n*n);
}

let temp = 28;

module.exports.calc = calc;
module.exports.square = square;

// module.exports = calc ;  // overriding our empty object

// console.log(module.exoprts);

//  console.log(calc.add(2,3));
//  square(6);