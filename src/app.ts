import express from "express";
import logger from "morgan";
import errorHandler from "./middlewares/error-handler";
import notFound from "./middlewares/not-found";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: add routing here

app.use("*", notFound());
app.use(errorHandler());

export default app;
