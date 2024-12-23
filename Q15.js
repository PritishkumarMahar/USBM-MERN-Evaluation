// Express js code for a server on port 4000 

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, World!"));

app.listen(4000, () => console.log("Server running on port 4000"));
