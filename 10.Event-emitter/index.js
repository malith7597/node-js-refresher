const eventEmitter = require("events");

const firstEventEmitter = new eventEmitter();

firstEventEmitter.on("greet", (text) => {
  console.log(`This is a greet event ${text}`);
});

// the syntax for register an event is :
// emitter.on('event-name', callbackFn)
// emitter.emit('event-name')
firstEventEmitter.emit("greet", "Malik");
