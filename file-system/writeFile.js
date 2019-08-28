const fs = require('fs');

// sync 

let data = fs.writeFileSync(__dirname+"/file.txt",'hello i m studying',{encoding : 'utf8'});

console.log(data);


// Async
let d = "we are here to read the file !";

let data1 = fs.writeFile(__dirname+"/inpt.txt",d, function(err,data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("program Ends");

// appendFile()
// createDir()
// removeDir()
// createFile()
// removeFile()
