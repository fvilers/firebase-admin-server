import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export default function errorHandler(): ErrorRequestHandler {
  return function (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    res.status(err.status || 500).send(err);
  };
}
