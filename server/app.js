import express from "express";
import "express-async-errors";
import cors from "cors";
import dbConnection from "./db/dbConnection.js";
import userRouter from "./routes/users.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 4000;

//middleWares//
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.static(process.env.PWD));
app.use("/api/users", userRouter);

//error handler///////
app.use(errorHandler);

dbConnection().then(() =>
  app.listen(port, () => {
    console.log(`server listining to ${port}`);
  })
);
