import express from "express";
import checkUser from "../middleware/checkUser.js";
import userController from "../controller/userController.js";
import catchAsync from "../utils/catchAsync.js";
const router = express.Router();

router.post("/createUser", catchAsync(userController.createUser));
router.put(
  "/updateUserName/:id",
  checkUser,
  catchAsync(userController.updateUserName)
);
router.get("/getAllUsers", catchAsync(userController.getAllUsers));

router.post("/uploadAvatar", catchAsync(userController.uploadUserAvatar));

export default router;
