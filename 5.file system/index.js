const fs = require("fs");
const path = require("path");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdir(dataFolder, (err) => {
    if (err) {
      console.error("Error creating folder:", err);
      return;
    }
    console.log("Folder created successfully");
    // copy the example txt to the data folder
  });
}

// copy the example txt to the data folder
fs.copyFile("example.txt", path.join(dataFolder, "example.txt"), (err) => {
  if (err) {
    console.error("Error copying file:", err);
    return;
  }
  console.log("File copied successfully");
});

// write to a file
fs.writeFileSync("example2.txt", "Hello, world!", "utf8");

//read from a file
const data = fs.readFileSync("example2.txt", "utf8");
console.log("File content:", data);

// append to a file
fs.appendFileSync("example2.txt", "\nHello again!", "utf8");
