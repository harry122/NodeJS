setTimeout(function(){
    console.log("Set TIme Out");
},2000);

let i = 1;

let id = setInterval(function(){
    console.log('every second');
    if(i == 4){
        clearInterval(this);
    }
    i++ ;
},1000);


setImmediate(function(){
    console.log('Immediate Excute');
})

setTimeout(function(){
    console.log('set Time out 0ms');
},0);