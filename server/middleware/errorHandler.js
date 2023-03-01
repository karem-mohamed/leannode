const logger = require("../logger/logger");

const errorHandler = (err, req, res, next) => {
  console.log("SERVER ERROR: ", err.message);
  logger.error(err);
  return res.status(500).json({ message: "Sommething went wrong" });
};

module.exports = errorHandler;
