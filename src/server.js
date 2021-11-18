import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(` ${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("We run server");
};

app.get("/", logger, handleHome);

const handleLinstening = () =>
  console.log(`✅ Server linstening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleLinstening);
