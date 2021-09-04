import express, { RequestHandler } from "express";
import getUser from "./get-user";
import listUsers from "./list-users";

const router = express.Router();

router.get("/get-user/:uid", getUser());
router.get("/list-users", listUsers());

export default function (): RequestHandler {
  return router;
}
