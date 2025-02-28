function sampleCallBackFn(name, callbackFn) {
  console.log("Hello " + name);
  callbackFn();
}

function callbackFn(text) {
  console.log("This is a callback function");
  console.log("Text is: " + text);
}

sampleCallBackFn("John", () => callbackFn("Hello World"));

const fs = require("fs");
fs.readFile("./input.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
