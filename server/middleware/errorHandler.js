import logger from "../logger/logger.js";

const errorHandler = (err, req, res, next) => {
  console.log("SERVER ERROR: ", err.message);
  logger.error(err);
  return res.status(500).json({ message: "Sommething went wrong" });
};

export default errorHandler;
