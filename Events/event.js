const events = require('events');             // avaiable in our modules,events modules, node/modules is avaible as we install 

let emitter = new events.EventEmitter();

// default max listener is 10.
emitter.setMaxListeners(15);

emitter.on('knock',function(){
    console.log(`whos's there !`);
});
                                     // we can fire 10 listners for one event in nodejs, but we can increase the limit by using setMaxListners(15);
emitter.on('knock',function(){                  
    console.log(`how're you !`);
});

// emitter.on('knock', () => console.log("3"));
// emitter.on('knock', () => console.log("4"));
// emitter.on('knock', () => console.log("5"));
// emitter.on('knock', () => console.log("6"));
// emitter.on('knock', () => console.log("7"));
// emitter.on('knock', () => console.log("8"));
// emitter.on('knock', () => console.log("9"));
// emitter.on('knock', () => console.log("10"));
// emitter.on('knock', () => console.log("11"));

emitter.emit('knock');                  // if there will be any event for this listener it will fire if not simply ignores it

// emitter.emit('knock');


emitter.once('click', function(){
    console.log('Got Clicked');
});

emitter.emit('click');
emitter.emit('click');     // it will not execute as we have registered the listener with once so it will fire only once.


// sendEmail

function mailSend() {
    console.log('Send Email');
}

emitter.on('sendEmail', mailSend);

emitter.on('sendEmail', function(name) {
    console.log(`Email send to ${name} Successfully`);
});

emitter.emit('sendEmail', 'ashu');

// If we want to remove one listener .

emitter.removeListener('sendEmail',mailSend);           // sendEmail is a event.

emitter.emit('sendEmail', 'ashu');
