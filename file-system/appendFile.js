
const fs = require('fs');

// sync 

// try {
//     fs.appendFileSync(__dirname+'/file.txt', 'data to append !','utf8');
//     console.log('The "data to append" was appended to file!');
//   } catch (err) {
//     console.log('error:',err);
//   }


// async

console.log("program starts");

let d = 'Here we are appending data async';

fs.appendFile(__dirname+'/inpt.txt',d , (err) => {
  if (err) console.log(err);
  console.log('The "data to append" was appended to file!');
});

console.log("program ends");

