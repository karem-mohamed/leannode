import client from "../../api/axios-instance";
export async function addUser(user) {
  const { avatar } = user;
  let formData = new FormData();
  formData.append("avatar", avatar);
  const { data } = await client.post("/api/users/uploadAvatar", formData);
  return await client.post("/api/users/createUser", {
    ...user,
    avatar: data.avatar,
  });
}

export async function getUsers() {
  return await client.get("/api/users/getAllUsers");
}

export async function changeUserName(user) {
  return await client.put(`/api/users/updateUserName/${user.id}`, {
    username: user.username,
  });
}
