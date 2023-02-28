export function addUser(user) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: user }), 500)
  );
}

export function getUsers() {
  const users = [
    { id: 1, username: "karem" },
    {
      id: 2,
      username: "ahmed",
    },
    {
      id: 3,
      username: "ali",
    },
  ];
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: users }), 500)
  );
}

export function changeUserName(user) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: user }), 500)
  );
}
