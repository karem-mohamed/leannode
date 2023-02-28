import React from "react";
import FormComponent from "./childs/formComponent";
import UsersList from "./childs/usersList";
import { Grid } from "@mui/material";

function Main() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <UsersList />
      </Grid>
      <Grid item xs={9}>
        <FormComponent />
      </Grid>
    </Grid>
  );
}

export default Main;
