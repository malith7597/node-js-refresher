const path = require("path");
// pre built module in node.js to work with file and directory paths
console.log(path.sep);

console.log(path.basename(__filename));
console.log(path.dirname(__dirname));

//following are the methods in path module

// folllowing gives the extension of the file
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.join(__dirname, "test", "hello.html"));
console.log(path.resolve(__dirname, "test", "hello.html"));
console.log(path.isAbsolute(__dirname));
console.log(path.isAbsolute("test/hello.html"));
console.log(path.parse(__filename).base);
console.log(path.format(path.parse(__filename)));
console.log(path.normalize("test/hello.html"));
