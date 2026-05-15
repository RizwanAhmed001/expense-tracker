import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API WORKING!")
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server Running At Port http://localhost:${port}`);
})