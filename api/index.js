const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  res.sendFile(path.join(__dirname, "../client/dist"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port localhost:${PORT}`);
});
