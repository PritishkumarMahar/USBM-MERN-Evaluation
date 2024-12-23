//Basic API to List Students

const express = require("express");
const app = express();

app.get("/students", (req, res) => {
  const students = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
  res.json(students);
});

app.listen(4000, () => console.log("API running on port 4000"));
