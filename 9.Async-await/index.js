async function division(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

async function main() {
  console.log("Start");
  try {
    await division(10, 10);
  } catch (err) {
    console.log(err);
  }
  console.log("End");
}

main();
