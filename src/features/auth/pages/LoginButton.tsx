import React from "react";
import Button from "@material-ui/core/Button";
import { useAppSelector } from "app/hooks";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginButton = ({ onClickLogin }: any) => {
  const isLogging = useAppSelector(state => state.auth.logging)
  
  function handleLoginClick() {
    onClickLogin();
  }

  return (
    <Button variant='contained' color='primary' size='large' onClick={handleLoginClick}>
      {isLogging && <CircularProgress size={20} color='secondary' />}
      Log In
    </Button>
  );
};

export default LoginButton;
