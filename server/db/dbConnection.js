import mongoose from "mongoose";
import logger from "../logger/logger.js";

const db_connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (err) {
    console.log("error database connection", err);
    logger.error(err);
  }
};

export default db_connection;
