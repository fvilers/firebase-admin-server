import express from "express";
import logger from "morgan";
import notFound from "./middlewares/not-found";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: add routing here

app.use("*", notFound());

export default app;
