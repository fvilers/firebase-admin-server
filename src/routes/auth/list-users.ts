import { NextFunction, Request, RequestHandler, Response } from "express";
import { BadRequest } from "http-errors";
import firebase, { isFirebaseError } from "../../firebase";
import { asInt, asString } from "../../parameters";

const BAD_REQUEST_CODES = ["auth/argument-error", "auth/invalid-page-token"];

export default function listUsers(): RequestHandler {
  return async function (req: Request, res: Response, next: NextFunction) {
    const maxResults = asInt(req.query.maxResults);

    if (req.query.maxResults !== undefined && maxResults === undefined) {
      next(new BadRequest('Invalid parameter "maxResults"'));
      return;
    }

    const pageToken = asString(req.query.pageToken);

    if (req.query.pageToken !== undefined && pageToken === undefined) {
      next(new BadRequest('Invalid parameter "pageToken"'));
      return;
    }

    try {
      const result = await firebase.auth().listUsers(maxResults, pageToken);

      res.status(200).send(result);
    } catch (error: unknown) {
      if (isFirebaseError(error)) {
        if (BAD_REQUEST_CODES.includes(error.code)) {
          next(new BadRequest(error.message));
          return;
        }
      }

      next(error);
    }
  };
}
