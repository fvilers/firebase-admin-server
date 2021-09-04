import express, { RequestHandler } from "express";
import listUsers from "./list-users";

const router = express.Router();

router.get("/list-users", listUsers());

export default function (): RequestHandler {
  return router;
}
