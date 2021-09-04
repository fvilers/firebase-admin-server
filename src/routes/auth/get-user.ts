import { NextFunction, Request, RequestHandler, Response } from "express";
import { BadRequest, NotFound } from "http-errors";
import firebase, { isFirebaseError } from "../../firebase";

const BAD_REQUEST_CODES = ["auth/invalid-uid"];

export default function getUser(): RequestHandler {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await firebase.auth().getUser(req.params.uid);

      res.status(200).send(result);
    } catch (error: unknown) {
      if (isFirebaseError(error)) {
        if (BAD_REQUEST_CODES.includes(error.code)) {
          next(new BadRequest(error.message));
          return;
        }

        if (error.code === "auth/user-not-found") {
          next(new NotFound());
          return;
        }
      }

      next(error);
    }
  };
}
