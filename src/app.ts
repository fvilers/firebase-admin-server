import express from "express";
import logger from "morgan";
import errorHandler from "./middlewares/error-handler";
import notFound from "./middlewares/not-found";
import routes from "./routes";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes());
app.use("*", notFound());
app.use(errorHandler());

export default app;
