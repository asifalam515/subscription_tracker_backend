import { Router } from "express";

const userRoute = Router();
userRoute.get("", (req, res) => {
  res.send("get all user");
});
userRoute.post("/sign-in", (req, res) => {
  res.send("signup");
});
userRoute.post("/sign-out", (req, res) => {
  res.send("signup");
});

export default userRoute;
