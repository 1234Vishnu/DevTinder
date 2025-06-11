const express = require("express");

const app = express();


app.use("/api", (req, res) => {
  res.send("Hello from the API!");
});
app.use("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
