const validateUserCreation = require("../validations/registrationSchema");
const userService = require("../services/userService");
const resizeImg = require("../utils/resizeImg");

const getAllUsers = async (req, res, next) => {
  const users = await userService.getAllUsersService();
  const avg = await userService.getUsersAvgAges();
  return res.status(200).json({ users, avg });
};

const updateUserName = async (req, res, next) => {
  const result = await userService.updateUserNameService({
    id: req.params.id,
    username: req.body.username,
  });

  const { status, ...rest } = result;
  if (status) {
    return res.status(200).json({ user: rest.newUser });
  } else {
    return res.status(400).json({ message: rest.message });
  }
};

const createUser = async (req, res, next) => {
  const { error } = validateUserCreation(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const result = await userService.createUserService(req.body);
  const avg = await userService.getUsersAvgAges();
  const { status, ...restData } = result;
  if (status) {
    return res.status(201).json({ newUser: restData, avg });
  } else {
    return res.status(400).json({ message: restData.message });
  }
};
const uploadUserAvatar = async (req, res, next) => {
  const loaded = await userService.uploadUserAvatar();
  loaded(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "some thing went wrong" });
    } else {
      if (!req.file?.path) {
        return res.status(500).json({ message: "failed to upload file" });
      }
      resizeImg(req.file.path);
      return res.status(200).json({ avatar: req.file.path });
    }
  });
};

module.exports = {
  createUser,
  updateUserName,
  getAllUsers,
  uploadUserAvatar,
};
