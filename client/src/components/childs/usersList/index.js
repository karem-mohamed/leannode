import React, { useEffect } from "react";
import styles from "./usersList.module.css";
import UserCard from "./UserCard";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync } from "../../../reducers/users/usersSlice";

function UsersList() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  return (
    <div className={styles.usersContainer}>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}

export default UsersList;
