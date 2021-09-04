import express, { RequestHandler } from "express";
import auth from "./auth";

const router = express.Router();
router.use("/auth", auth());

export default function (): RequestHandler {
  return router;
}
