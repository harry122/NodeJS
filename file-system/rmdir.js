const fs = require('fs');

fs.unlink('./Created/writeFile.txt', function(err, data) {
    if(err) throw err;
    else{
    fs.rmdir('Created',function(err, data){
        if(err) throw err;
        else console.log(data);
    });
}
});