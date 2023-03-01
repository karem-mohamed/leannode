const express = require("express");
const checkUser = require("../middleware/checkUser");
const userController = require("../controller/userController");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

router.post("/createUser", catchAsync(userController.createUser));
router.put(
  "/updateUserName/:id",
  checkUser,
  catchAsync(userController.updateUserName)
);
router.get("/getAllUsers", catchAsync(userController.getAllUsers));

router.post("/uploadAvatar", catchAsync(userController.uploadUserAvatar));

module.exports = router;
