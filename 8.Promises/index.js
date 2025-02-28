function delayFunction(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/* console.log("Start");
delayFunction(5000)
  .then(() => {
    console.log("Hello");
  })
  .catch((err) => {
    console.log(err);
  });

console.log("End");
 */
function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot divide by zero");
    }
    resolve(num1 / num2);
  });
}

divideFn(10, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
