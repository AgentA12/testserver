const router = require("express").Router();
// const path = require("path");
// const fs = require("fs");
// const jsonDbPath = path.join(__dirname, "../db/data.json");

router.get("/data", (req, res) => {
  console.log("got the GET request");
  return res.json({ Response: "got the GET request" });
});

router.post("/data", (req, res, next) => {
  console.log("got the POST request");
  return res.json("Received a POST HTTP method");
});

router.put("/data", (req, res) => {
  console.log("got the PUT request");
  return res.json("Received a PUT HTTP method");
});

router.delete("/data", (req, res) => {
  console.log("got the DELETE request");
  return res.json("Received a DELETE HTTP method");
});

module.exports = router;
