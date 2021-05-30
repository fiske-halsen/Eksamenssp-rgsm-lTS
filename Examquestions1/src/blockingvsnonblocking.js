const fs1 = require("fs");
const data = fs1.readFileSync("file.txt"); // blocks here until file is read
console.log(data);

// Non-blocking
const fs2 = require("fs");
fs2.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
