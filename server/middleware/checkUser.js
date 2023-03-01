const logger = require("../logger/logger");
const User = require("../models/user");

module.exports = async function (req, res, next) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      res.status(404).send({ message: "User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};
