import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Songs route with GET method");
});

export default router;
