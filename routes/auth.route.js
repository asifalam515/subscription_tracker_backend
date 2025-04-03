import { Router } from "express";

const authRouter = Router();
authRouter.post("/sign-up", (req, res) => {
  res.send("signup");
});
authRouter.post("/sign-in", (req, res) => {
  res.send("signup");
});
authRouter.post("/sign-out", (req, res) => {
  res.send("signup");
});

export default authRouter;
