
const fs = require("fs");

// Create file
fs.writeFileSync("student.txt", "Welcome to SDC Lab!");

// Read file
console.log("File Content:", fs.readFileSync("student.txt", "utf8"));

// Append content
fs.appendFileSync("student.txt", "\nFile Management using Node.js");

// Read updated file
console.log("Updated Content:");
console.log(fs.readFileSync("student.txt", "utf8"));

console.log("File operation completed!");
