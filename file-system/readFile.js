const fs = require('fs');
const path = require('path');

console.log('Program Starts');

 let fle = path.join(__dirname,'../../modules/blocking.js');

//Synchronus 

// let data = fs.readFileSync('./modules/blocking.js',{encoding:'utf8'});

// let data = fs.readFileSync('./modules/blocking.js',{encoding : 'utf8'});

let data = fs.readFileSync(fle,{encoding : 'utf8'});

// console.log(data);

fs.readFile('./modules/blocking.js',{encoding : 'utf8'}, function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
})

console.log('Program Ends');


// async

