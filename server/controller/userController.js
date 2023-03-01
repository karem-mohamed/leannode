import validateUserCreation from "../validations/registrationSchema.js";
import userService from "../services/userService.js";
import resizeImg from "../utils/resizeImg.js";

const getAllUsers = async (req, res, next) => {
  const { avg, users } = await userService.getAllUsersService();
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
  const { status, ...restData } = result;
  if (status) {
    const avg = restData.avg;
    delete restData.avg;
    return res.status(201).json({ newUser: restData, avg });
  } else {
    return res.status(400).json({ message: restData.message });
  }
};
const uploadUserAvatar = async (req, res, next) => {
  const loaded = await userService.uploadUserAvatar();
  loaded(req, res, (err) => {
    if (err) {
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
export default { createUser, updateUserName, getAllUsers, uploadUserAvatar };
