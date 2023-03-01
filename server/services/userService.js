import _ from "lodash";
import User from "../models/user.js";
import Average from "../models/average.js";
import multer from "multer";
import path from "path";
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
  const avg = await getUsersAvgAges(user);

  return { status: true, avg, ...result };
};

///////////////////////////////////////////
// This function has been made in order to keep the last average and not to overload the data base if the data grows
// ///////////////////////////////////////

const getUsersAvgAges = async (user) => {
  let oldAverage = await Average.findOne({});
  if (!user) {
    if (oldAverage) {
      return oldAverage.values.total / oldAverage.values.count ?? 0;
    }
    return 0;
  } else {
    let newAverage;
    if (!oldAverage) {
      const average = new Average({
        values: {
          total: user.age,
          count: 1,
        },
      });
      await average.save();
      newAverage = average.values.total;
    } else {
      const total = oldAverage.values.total;
      const count = oldAverage.values.count;
      oldAverage.values = {
        total: total + user.age,
        count: count + 1,
      };
      await oldAverage.save();
      newAverage = oldAverage.values.total / oldAverage.values.count;
    }
    return newAverage ?? 0;
  }
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
  const users = await User.find({}, { password: 0 })
    .sort({ updatedAt: "desc" })
    .exec();
  const avg = await getUsersAvgAges(null);
  return { avg, users };
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

export default {
  createUserService,
  updateUserNameService,
  getAllUsersService,
  getUsersAvgAges,
  uploadUserAvatar,
};
