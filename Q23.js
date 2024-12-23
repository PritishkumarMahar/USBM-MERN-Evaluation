/*
Synchronous functions execute code sequentially, blocking the execution of subsequent tasks until the current one is complete. This makes them slower for tasks like file or database operations. For example, fs.readFileSync reads a file synchronously, blocking the event loop.
Asynchronous functions, on the other hand, do not block the execution of other code. They use callbacks, Promises, or async/await to handle results when they are ready. For instance, fs.readFile reads a file asynchronously, allowing other operations to continue while waiting for the file read operation to complete.
*/

// Synchronous Function
const fs = require("fs");

try {
  const data = fs.readFileSync("file.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error(err);
}
// ASynchronous Function
const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
