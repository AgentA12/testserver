const express = require("express");
const app = express();
const router = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(router);

if (process.env.environment === "production") {
  app.get("*", (_, res) => {
    app.use(express.static(path.join(__dirname, "../client/dist")));
    res.sendFile(path.join(__dirname, "../client/dist"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
