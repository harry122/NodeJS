let i = 1;

let id = setInterval(function(){
    console.log('every second');
    if(i == 4){
        clearInterval(this);
    }
    i++ ;
},1000);


process.on('exit', function(){
    console.log('Exiting the Process');
})

process.on('uncaughtException',function(){
    console.log('error occured');
})



// REPL => READ EVALUATE PRINT LOOP  : available with our node install.  run time environment.