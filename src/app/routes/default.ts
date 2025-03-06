import { Router } from "express";

const defaultRouter = Router();

defaultRouter.get("/", (req, res) => {
  res.json({
    message: "Kike Vanegas Portfolio Backend"
  });
});

export default defaultRouter;