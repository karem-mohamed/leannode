const _ = require("lodash");
const User = require("../models/user");
const multer = require("multer");
const path = require("path");
const createUserService = async (userData) => {
  const count = await User.countDocuments({ email: userData.email });
  if (count && count > 0) {
    return { status: false, message: "this email is exisit" };
  }
  const user = new User(
    _.pick(userData, [
      "username",
      "name",
      "email",
      "password",
      "avatar",
      "age",
      "email",
      "biography",
    ])
  );

  await user.save();

  const result = _.pick(user, [
    "username",
    "name",
    "email",
    "avatar",
    "age",
    "email",
    "biography",
  ]);

  return { status: true, ...result };
};

const getUsersAvgAges = async () => {
  const avg = await User.aggregate([
    { $group: { _id: null, avg_age: { $avg: "$age" } } },
  ]);

  return avg[0].avg_age ?? 0;
};

const updateUserNameService = async (userData) => {
  const { id, username } = userData;
  const regex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
  if (!username || !regex.test(username) || username?.length < 8) {
    return { status: false, message: "username not valid" };
  }
  const newUser = await User.findByIdAndUpdate(
    id,
    {
      username: username,
    },
    { new: true }
  );
  return { status: true, newUser };
};

const getAllUsersService = async () => {
  const allUsers = await User.find({});
  return allUsers;
};

const uploadUserAvatar = async () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        file.originalname.slice(
          0,
          file.originalname.length - path.extname(file.originalname).length
        ) +
          "-" +
          uniqueSuffix +
          path.extname(file.originalname)
      );
    },
  });

  const upload = multer({ storage: storage }).single("avatar");
  return upload;
};

module.exports = {
  createUserService,
  updateUserNameService,
  getAllUsersService,
  getUsersAvgAges,
  uploadUserAvatar,
};
