const router = require("express").Router();
// const path = require("path");
// const fs = require("fs");
// const jsonDbPath = path.join(__dirname, "../db/data.json");

router.get("/", (req, res) => {
  console.log("got the GET request");
  return res.send({ Response: "got the GET request" });
});

router.post("/", (req, res, next) => {
  console.log("got the POST request");
  return res.send("Received a POST HTTP method");
});

router.put("/", (req, res) => {
  console.log("got the PUT request");
  return res.send("Received a PUT HTTP method");
});

router.delete("/", (req, res) => {
  console.log("got the DELETE request");
  return res.send("Received a DELETE HTTP method");
});

module.exports = router;
