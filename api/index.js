const express = require("express");
const app = express();
const router = require("./routes/index");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(router);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
