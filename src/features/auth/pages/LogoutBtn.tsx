import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAppDispatch } from "app/hooks";
import { authActions } from "../authSlice";
import { Button } from "@material-ui/core";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <Button onClick={handleLogoutClick} variant='contained' color='primary'>
      Log out
    </Button>
  );
};

export default LogoutButton;
