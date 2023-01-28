import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { useAppDispatch, useAppSelector } from "app/hooks";
import * as React from "react";
import { authActions } from "../authSlice";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[100],
  },

  paper: {
    width: "50%",
    padding: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    )
  };

  return (
    <Box className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant='h3'>Student Management</Typography>
        <LoginButton onClickLogin={handleLoginClick} />
      </Paper>
    </Box>
  );
}
