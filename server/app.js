const express = require("express");
require("express-async-errors");
const cors = require("cors");
const dbConnection = require("./db/dbConnection");
const userRouter = require("./routes/users");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = process.env.PORT || 4000;

//middleWares//
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(express.static(__dirname + "/images"));
app.use("/api/users", userRouter);

//error handler///////
app.use(errorHandler);

dbConnection().then(() =>
  app.listen(port, () => {
    console.log(`server listining to ${port}`);
  })
);
