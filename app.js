import express from "express";
import { PORT } from "./config/env";
const app = express();

app.use("/", (req, res) => {
  res.send("welcome to our subscription tracker project");
});
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
